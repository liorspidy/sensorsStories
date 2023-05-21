import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import About from "./components/about/About";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  useEffect(() => {
    setIsMobile(isMobileDevice());

    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Routes>
        <Route index element={<Main isMobile={isMobile} />} />
        <Route path="about-me" element={<About />} />
      </Routes>
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
