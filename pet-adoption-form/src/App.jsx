import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import './App.css'; // Import your CSS file here
import React, { useState } from 'react';
import Home from "./components/Home";
import { AppProvider } from './AppContext';
function App() {
  
  return (
    <AppProvider>
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="table" element={<About />} />
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


function About() {
  return <h2>About Us</h2>;
}

export default App;
