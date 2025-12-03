"use client";

import { useEffect, useState } from "react";
import type { GeoJsonObject } from "geojson";

const EVACUATION_ROAD_API = "https://gis.bnpb.go.id/server/rest/services/inarisk/RENEVAK_tsunami/MapServer/8/query?where=1=1&f=geojson"

export default function useEvacuationRoadCoordinates(): GeoJsonObject | null {
  const [evacuationRoad, setEvacuationRoad] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    async function fetchEvacuationRoad() {
      try {
        const response = await fetch(EVACUATION_ROAD_API);
        const data = await response.json();
        setEvacuationRoad(data);
      } catch (error) {
        console.error("Error fetching evacuation road data:", error);
      }
    }

    fetchEvacuationRoad();
  }, []);

  return evacuationRoad;
}
