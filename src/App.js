import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import { AuthContextProvider } from "./context/AuthContext";
import Auth from "./pages/Auth";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
