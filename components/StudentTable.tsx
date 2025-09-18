interface StudentTableProps {
  data: { id: number; name: string; grade: string }[];
}

export default function StudentTable({ data }: StudentTableProps) {
  return (
    <table className="w-full text-gray-100 border-collapse">
      <thead>
        <tr className="bg-gray-700">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Grade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((s) => (
          <tr key={s.id} className="hover:bg-gray-600 transition-colors">
            <td className="p-2 border">{s.id}</td>
            <td className="p-2 border">{s.name}</td>
            <td className="p-2 border">{s.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}