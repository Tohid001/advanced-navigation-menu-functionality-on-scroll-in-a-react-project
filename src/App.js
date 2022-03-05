import React, { useState, useEffect, useRef } from "react";
import { StyledSection } from "./Styled-components";
import { links } from "./data";
import { useScrollspy } from "./useScrollspy.js";
import Navbar from "./Navbar.js";

function App() {
  const [sections, setSections] = useState([]);
  const [currentIntersectingElementIndex] = useScrollspy(sections);

  const sectionRefs = useRef([]);
  // console.log(sectionRefs.current);
  console.log("app", currentIntersectingElementIndex);

  const addtoRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    console.log("appEFF");
    setSections(sectionRefs.current);
  }, []);

  return (
    <main>
      {/* <Navbar
      // current={
      //   sections.length > 0
      //     ? sections[currentIntersectingElementIndex].id
      //     : null
      // }
      /> */}
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
