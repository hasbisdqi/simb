"use client";

import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON, Circle } from 'react-leaflet';

import useEvacuationRoadCoordinates from '../hooks/use_evacuation_road_coordinates';
import useAssemblyPointCoordinates from '../hooks/use_assembly_point_coordinates';
import useEarthquakeData from '../hooks/use_earthquake_data';

const indonesia_coordinate = [-2.5489, 118.0149] as LatLngExpression;
const zoom_level = 5;

export default function TsunamiZoneMap() {
  const evacuationRoadData = useEvacuationRoadCoordinates();
  const assemblyPointData = useAssemblyPointCoordinates();
  const { nonTsunamiPotential, tsunamiPotential } = useEarthquakeData();

  return (
    <div className="relative h-[400px] w-full mt-4">
      <MapContainer center={indonesia_coordinate} zoom={zoom_level} className='h-full w-full'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {evacuationRoadData && (
          <GeoJSON
            data={evacuationRoadData}
          />
        )}

        {assemblyPointData && (
          <GeoJSON
            data={assemblyPointData}
          />
        )}

        {nonTsunamiPotential && nonTsunamiPotential.map((quake, index) => (
          <Circle
            key={index}
            center={quake.coordinate}
            radius={quake.magnitude * 1000}
            pathOptions={{ color: 'orange' }}
          />
        ))}
        {tsunamiPotential && tsunamiPotential.map((quake, index) => (
          <Circle
            key={index}
            center={quake.coordinate}
            radius={quake.magnitude * 1000}
            pathOptions={{ color: 'red' }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
