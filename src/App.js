import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Oauth from "./component/OAuth";
import Auth from "./pages/Auth";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={Auth(Home, true)} />
      <Route path="/login" element={Auth(Login, null)} />
      <Route path="/oauth" element={Auth(Oauth, null)} />
    </Routes>
  );
}

export default App;
