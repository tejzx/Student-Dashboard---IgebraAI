import { motion } from "framer-motion";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface AttentionScatterProps {
  data: { x: number; y: number }[];
}

export default function AttentionScatter({ data }: AttentionScatterProps) {
  return (
    <ScatterChart width={400} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis dataKey="y" />
      <Tooltip />
      <Scatter
        name="Attention"
        data={data}
        fill="#8B5CF6"
        shape={(props) => {
          const { cx, cy, index } = props;
          return (
            <motion.circle
              cx={cx}
              cy={cy}
              r={6}
              fill="#8B5CF6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            />
          );
        }}
      />
    </ScatterChart>
  );
}