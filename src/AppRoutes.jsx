import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/components/public/homepage/HomePage.jsx";

export function AppRoutes({ isAuthenticated }) {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }