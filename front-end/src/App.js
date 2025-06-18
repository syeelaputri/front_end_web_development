// kamis, 19 juni 2025
// exercise 7

// props dan state

import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("App");
  const handleClick = () => {
    // console.log("Button clicked"); // aman
    setTitle("Front-end Web Development");
  };
  return (
    <>
      <h1>{title}</h1>
      {/* props function */}
      <Header handleClick={handleClick} />
      {/* props text dan number */}
      <Home text="Ini adalah Home." number={91} />
      {/* props boolean */}
      <Footer boolean={false} />
    </>
  );
};

export default App;
