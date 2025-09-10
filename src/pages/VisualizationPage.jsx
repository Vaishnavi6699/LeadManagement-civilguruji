import { useContext } from "react";
import { LeadContext } from "../context/LeadContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function VisualizationPage() {
  const { leads } = useContext(LeadContext);
  const converted = leads.filter((l) => l.status === "Converted").length;
  const pending = leads.filter((l) => l.status === "Pending").length;

  const data = [
    { name: "Converted", value: converted },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#4CAF50", "#FF9800"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lead Visualization</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
