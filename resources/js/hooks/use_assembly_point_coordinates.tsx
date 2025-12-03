"use client";

import { useEffect, useState } from "react";
import { type GeoJsonObject } from "geojson";

const EVACUATION_POINT_API = "https://gis.bnpb.go.id/server/rest/services/inarisk/RENEVAK_tsunami/MapServer/10/query?where=1=1&f=geojson"

export default function useAssemblyPointCoordinates(): GeoJsonObject | null {
  const [assemblyPointData, setAssemblyPointData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    async function fetchAssemblyPointData() {
      try {
        const response = await fetch(EVACUATION_POINT_API);
        const data = await response.json();
        setAssemblyPointData(data);
      } catch (error) {
        console.error("Error fetching assembly point data:", error);
      }
    }

    fetchAssemblyPointData();
  }, []);

  return assemblyPointData;
}
