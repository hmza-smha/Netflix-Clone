
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavList />} />
      </Routes>
    )
}