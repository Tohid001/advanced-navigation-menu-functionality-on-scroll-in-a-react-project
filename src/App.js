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
      {links.map((item, index) => (
        <StyledSection
          ref={addtoRefs}
          key={`${item}-${index}`}
          id={item.text}
          section={item.text}
        >
          <h1>{item.text}</h1>
        </StyledSection>
      ))}
    </main>
  );
}

export default App;
