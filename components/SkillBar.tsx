import { motion } from "framer-motion";

interface SkillBarProps {
  data: { skill: string; level: number }[];
}

export default function SkillBar({ data }: SkillBarProps) {
  return (
    <div className="space-y-3">
      {data.map((d, i) => (
        <div key={i}>
          <p className="text-gray-100 mb-1">{d.skill}</p>
          <div className="bg-gray-700 rounded h-4 w-full">
            <motion.div
              className="bg-indigo-500 h-4 rounded"
              initial={{ width: 0 }}
              animate={{ width: `${d.level}%` }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}