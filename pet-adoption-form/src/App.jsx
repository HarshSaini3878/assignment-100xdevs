import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import './App.css'; // Import your CSS file here
import React, { useState } from 'react';
import Home from "./components/Home";
import { AppProvider } from './AppContext';
import Table from "./components/Table";
function App() {
  
  return (
    <AppProvider>
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
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
