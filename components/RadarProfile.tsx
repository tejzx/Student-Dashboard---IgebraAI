import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";

interface RadarProfileProps {
  data: { subject: string; score: number }[];
}

export default function RadarProfile({ data }: RadarProfileProps) {
  return (
    <RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="#A78BFA" />
      <PolarRadiusAxis />
      <Radar
        name="Score"
        dataKey="score"
        stroke="#8B5CF6"
        fill="#8B5CF6"
        fillOpacity={0.6}
        isAnimationActive
      />
      <Tooltip />
    </RadarChart>
  );
}