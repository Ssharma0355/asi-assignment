import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailsSkeleton from "./skeleton/DetailsSkeleton";

const Details = lazy(() => import("./pages/Details"));

function App() {
  return (
    <Suspense fallback={<DetailsSkeleton />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </Suspense>
  );
}

export default App;