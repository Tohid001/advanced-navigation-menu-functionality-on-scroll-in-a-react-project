import React, { useState, useRef, useEffect } from "react";
import { NavBar, ProgressBar } from "./Styled-components.js";
import { useScrollspy } from "./useScrollspy.js";

import { links } from "./data.js";
const Navbar = () => {
  console.log("nav rendered");
  const [sections, setSections] = useState([]);
  const [currentIntersectingElementIndex] = useScrollspy(sections, {
    offset: 400,
  });

  useEffect(() => {
    const sectionElements = links.map(({ text }) =>
      document.querySelector(`section[id="${text}"]`)
    );

    setSections(sectionElements);
  }, []);

  const navEl = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - navEl.current.offsetHeight,
    });
  };
  return (
    <NavBar ref={navEl}>
      <ul>
        {links.map(({ url, id, text }, index) => {
          return (
            <li
              className={
                index === currentIntersectingElementIndex ? "active" : null
              }
              key={`${text}-${index}`}
            >
              <a href={url} onClick={handleClick}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </NavBar>
  );
};

export default React.memo(Navbar);
