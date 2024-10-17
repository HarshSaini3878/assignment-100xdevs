import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import './App.css'; // Import your CSS file here
import React, { useState } from 'react';
import Home from "./components/Home";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]); // Initialize as an empty array

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home setdata={setData} data={data} />} />
          <Route path="table" element={<Table data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="layout">
      <header className="title-bar">
        <h1 className="title">My Awesome App</h1>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
