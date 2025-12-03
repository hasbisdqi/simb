import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Bar } from 'recharts';

export default function DisasterHitoryChart({ data }: { data: any }) {
  return (
    <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" isAnimationActive={true} />
      <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={true} />
    </BarChart>
  )
}
