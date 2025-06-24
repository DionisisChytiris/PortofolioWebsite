import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WorldTrivia from "./pages/WorldTrivia";
import GreekGeography from "./pages/GreekGeography";
import WorldTriviaWebsite from "./pages/WorldTriviaWebsite";
import GreekGeoWebsite from "./pages/GreekGeoWebsite";
import RealMadridFC from "./pages/RealMadridFC";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/worldTrivia" element={<WorldTrivia />} />
        <Route path="/greekGeography" element={<GreekGeography />} />
        <Route path="/worldTriviaWebsite" element={<WorldTriviaWebsite />} />
        <Route path="/greekGeoWebsite" element={<GreekGeoWebsite />} />
        <Route path="/realMadrid" element={<RealMadridFC />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
