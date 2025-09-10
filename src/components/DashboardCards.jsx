import { useContext } from "react";
import { LeadContext } from "../context/LeadContext";

export default function DashboardCards() {
  const { leads } = useContext(LeadContext);
  const total = leads.length;
  const converted = leads.filter((l) => l.status === "Converted").length;
  const pending = leads.filter((l) => l.status === "Pending").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-semibold">Total Leads</h3>
        <p className="text-2xl">{total}</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-semibold">Converted</h3>
        <p className="text-2xl">{converted}</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-semibold">Pending</h3>
        <p className="text-2xl">{pending}</p>
      </div>
    </div>
  );
}
