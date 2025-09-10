import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import VisualizationPage from "./pages/VisualizationPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/visualization" element={<VisualizationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
