import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6">
      <Link to="/" className="font-semibold hover:underline">Dashboard</Link>
      <Link to="/form" className="font-semibold hover:underline">Form</Link>
      <Link to="/table" className="font-semibold hover:underline">Table</Link>
      <Link to="/visualization" className="font-semibold hover:underline">Visualization</Link>
    </nav>
  );
}
