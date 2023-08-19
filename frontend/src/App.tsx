import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import College from "./pages/College";
import { useState, useEffect } from "react";
import "./App.css";

// USE REGULAR JAVASCRIPT

function App() {
  const [page, setPage] = useState("about");

  useEffect(() => {
    testOnce();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/college" element={<College />} />
      </Routes>
      <Footer />
    </div>
  );
}

async function testOnce() {
  // await fetch("/api/test", {
  //   method: "GET",
  //   mode: "no-cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then((users) => {
  //     console.log(users);
  //   });
  // console.log("here");
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
