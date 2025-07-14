import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}