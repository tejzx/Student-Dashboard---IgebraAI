import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface ClusterPieProps {
  data: { name: string; value: number }[];
}

const colors = ["#8B5CF6", "#6366F1", "#EC4899"];

export default function ClusterPie({ data }: ClusterPieProps) {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <motion.g key={index} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.2 }}>
            <Cell fill={colors[index % colors.length]} />
          </motion.g>
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}