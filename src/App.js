import React, { useState, useEffect } from "react";
import { StyledSection } from "./Styled-components";
import { links } from "./data";
import { useHighlightMenuOnScroll } from "./useHighlightMenuOnScroll";
import Navbar from "./Navbar.js";

function App() {
  const [current, setCurrent, highLightRefs, addtoRefs] =
    useHighlightMenuOnScroll();

  return (
    <main>
      <Navbar current={current} setCurrent={setCurrent} />
      {links.map(({ Component, text }, index) => (
        <Component
          ref={addtoRefs}
          key={`${text}-${index}`}
          id={text}
          section={text}
        >
          <h1>{text}</h1>
        </Component>
      ))}
    </main>
  );
}

export default App;
