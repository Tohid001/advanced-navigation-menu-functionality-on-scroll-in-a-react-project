import React, { useState, useEffect, useRef } from "react";
import { links } from "./data";
import Navbar from "./Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      {links.map(({ Component, text }, index) => (
        <Component key={`${text}-${index}`} id={text} section={text}>
          <h1>{text}</h1>
        </Component>
      ))}
    </>
  );
}

export default App;
