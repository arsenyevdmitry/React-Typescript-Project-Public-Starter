import "./App.css"

import React, { FC, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import PizzaPage from "./pages/PizzaPage"

const App: FC = () => {
  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza/:id" element={<PizzaPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
