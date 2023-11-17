import React, { useState } from "react";
// import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/login"
          element={<Login onLoginUpdate={setIsLoggedIn} />}
        ></Route>

        {isLoggedIn && <Route path="/home" element={<Home />}></Route>}
        <Route path="/:pageName" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
