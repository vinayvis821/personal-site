import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import College from "./pages/College";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("about");

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/college" element={<College />} />
      </Routes>
      {/* {showContent(page)} */}
      <Footer />
    </div>
  );
}

function showContent(page: string) {
  if (page == "about") {
    return <About />;
  } else if (page == "test") {
    return <div>Test</div>;
  } else {
    return <div>Bruh</div>;
  }
}

export default App;
