import { useContext, useState } from "react";
import { LeadContext } from "../context/LeadContext";

export default function LeadForm() {
  const { leads, setLeads } = useContext(LeadContext);
  const [form, setForm] = useState({ name: "", email: "", status: "Pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = { id: Date.now(), ...form };
    setLeads([...leads, newLead]);
    setForm({ name: "", email: "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
        className="w-full p-2 border rounded"
      >
        <option value="Pending">Pending</option>
        <option value="Converted">Converted</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Lead
      </button>
    </form>
  );
}
