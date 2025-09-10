
import { createContext, useState, useEffect } from "react";

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);

  // Load from localStorage on mount or add dummy leads if empty
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leads")) || [];

    if (stored.length === 0) {
      const dummy = [
        { id: 1, name: "Rahul Sharma", email: "rahul@example.com", status: "Converted" },
        { id: 2, name: "Priya Singh", email: "priya@example.com", status: "Pending" },
        { id: 3, name: "Amit Verma", email: "amit@example.com", status: "Converted" },
        { id: 4, name: "Sneha Kapoor", email: "sneha@example.com", status: "Pending" },
        { id: 5, name: "Rohit Mehra", email: "rohit@example.com", status: "Pending" },
        { id: 6, name: "Anita Joshi", email: "anita@example.com", status: "Converted" },
      ];
      setLeads(dummy);
      localStorage.setItem("leads", JSON.stringify(dummy));
    } else {
      setLeads(stored);
    }
  }, []);

  // Sync localStorage whenever leads change
  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  return (
    <LeadContext.Provider value={{ leads, setLeads }}>
      {children}
    </LeadContext.Provider>
  );
};
