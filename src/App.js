import React, { useState, useEffect } from "react";
import { StyledSection } from "./Styled-components";
import { links } from "./data";
import { useHighlightMenuOnScroll } from "./useHighlightMenuOnScroll";
import Navbar from "./Navbar.js";

function App() {
  const [activeNavItems, setActiveNavItems, highLightRefs, addtoRefs] =
    useHighlightMenuOnScroll();

  return (
    <main>
      <Navbar
        activeNavItems={activeNavItems}
        setActiveNavItems={setActiveNavItems}
      />
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
