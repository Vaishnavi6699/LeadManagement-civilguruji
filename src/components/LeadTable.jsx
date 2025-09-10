import { useContext, useState } from "react";
import { LeadContext } from "../context/LeadContext";

export default function LeadTable() {
  const { leads, setLeads } = useContext(LeadContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", status: "" });

  const handleDelete = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const handleEdit = (lead) => {
    setEditingId(lead.id);
    setEditForm({ name: lead.name, email: lead.email, status: lead.status });
  };

  const handleSave = (id) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, ...editForm } : lead
      )
    );
    setEditingId(null);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || lead.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name/email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Converted">Converted</option>
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map((lead) => (
            <tr key={lead.id} className="text-center">
              {editingId === lead.id ? (
                <>
                  <td className="border p-2">
                    <input
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                      className="border p-1 rounded"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                      className="border p-1 rounded"
                    />
                  </td>
                  <td className="border p-2">
                    <select
                      value={editForm.status}
                      onChange={(e) =>
                        setEditForm({ ...editForm, status: e.target.value })
                      }
                      className="border p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Converted">Converted</option>
                    </select>
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleSave(lead.id)}
                      className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border p-2">{lead.name}</td>
                  <td className="border p-2">{lead.email}</td>
                  <td className="border p-2">{lead.status}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleEdit(lead)}
                      className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
