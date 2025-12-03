"use client";

import type { LatLngExpression } from "leaflet";
import { useEffect, useMemo, useState } from "react";

const EARTHQUAKE_DATA_API = "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json";

type FullEarthQuakeDataJSON = {
  Infogempa: {
    gempa: EarthQuakeDataJSON[];
  }
}

type EarthQuakeDataJSON = {
  Tanggal: string;
  Jam: string;
  DateTime: string;
  Coordinates: string;
  Lintang: string;
  Bujur: string;
  Magnitude: string;
  Kedalaman: string;
  Wilayah: string;
  Potensi: string;
};

type EarthQuakeData = {
  time: string;
  date: string;
  coordinate: LatLngExpression;
  magnitude: number;
  depth: number;
  region: string;
  tsunami_potential: boolean;
}

function parseCoordinate(coordinateStr: string): LatLngExpression {
  const [latStr, lngStr] = coordinateStr.split(",").map(s => s.trim());
  const lat = parseFloat(latStr);
  const lng = parseFloat(lngStr);

  return [lat, lng];
}

function parseTsunamiPotency(potencyStr: string): boolean {
  return potencyStr.toLowerCase() !== "tidak berpotensi tsunami";
}

function parseEarthquakeData(data: EarthQuakeDataJSON): EarthQuakeData {
  return {
    time: data.Jam,
    date: data.Tanggal,
    coordinate: parseCoordinate(data.Coordinates),
    magnitude: parseFloat(data.Magnitude),
    depth: parseFloat(data.Kedalaman),
    region: data.Wilayah,
    tsunami_potential: parseTsunamiPotency(data.Potensi),
  };
}

export function useRawEarthquakeData(): EarthQuakeDataJSON[] | null {
  const [earthquakeData, setEarthquakeData] = useState<EarthQuakeDataJSON[] | null>(null);

  useEffect(() => {
    async function fetchEarthquakeData() {
      try {
        const response = await fetch(EARTHQUAKE_DATA_API);
        const data = await response.json() as FullEarthQuakeDataJSON;
        setEarthquakeData(data.Infogempa.gempa);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      }
    }

    fetchEarthquakeData();
  }, []);

  return earthquakeData;
}


export default function useEarthquakeData(): { nonTsunamiPotential: EarthQuakeData[] | null, tsunamiPotential: EarthQuakeData[] | null } {
  const [earthquakeData, setEarthquakeData] = useState<EarthQuakeDataJSON[] | null>(null);

  useEffect(() => {
    async function fetchEarthquakeData() {
      try {
        const response = await fetch(EARTHQUAKE_DATA_API);
        const data = await response.json() as FullEarthQuakeDataJSON;
        setEarthquakeData(data.Infogempa.gempa);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      }
    }

    fetchEarthquakeData();
  }, []);

  const parsedEarthquakeData = useMemo(() => earthquakeData ? earthquakeData.map(parseEarthquakeData) : null, [earthquakeData]);

  const nonTsunamiPotential = useMemo(() =>
    parsedEarthquakeData ? parsedEarthquakeData.filter(eq => !eq.tsunami_potential) : null, [parsedEarthquakeData]);

  const tsunamiPotential = useMemo(() =>
    parsedEarthquakeData ? parsedEarthquakeData.filter(eq => eq.tsunami_potential) : null, [parsedEarthquakeData]);

  return { nonTsunamiPotential, tsunamiPotential };
}
