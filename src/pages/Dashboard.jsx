
import { useContext } from "react";
import { LeadContext } from "../context/LeadContext";

export default function Dashboard() {
  const { leads } = useContext(LeadContext); // get leads from context

  // Stats
  const total = leads.length;
  const converted = leads.filter(l => l.status === "Converted").length;
  const pending = leads.filter(l => l.status === "Pending").length;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Lead Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold">Total Leads</h3>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold">Converted</h3>
          <p className="text-3xl font-bold mt-2">{converted}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-3xl font-bold mt-2">{pending}</p>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">All Leads</h3>
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{lead.id}</td>
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full font-semibold text-white ${
                      lead.status === "Converted" ? "bg-green-600" : "bg-orange-500"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
