// kamis, 19 juni 2025
// exercise 7

// props (function), state, click event

import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("App"); // state
  const handleClick = () => {
    // console.log("Button clicked"); // cek, aman
    setTitle("Front-end Web Development");
  };
  return (
    <>
      <h1>{title}</h1>
      {/* props text dan function */}
      <Header text="Ini adalah Header." handleClick={handleClick} />
      <Home />
      <Footer />
    </>
  );
};

export default App;
