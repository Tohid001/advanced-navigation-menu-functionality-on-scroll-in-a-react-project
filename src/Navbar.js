import React, { useState, useRef, useEffect } from "react";
import { NavBar, ProgressBar } from "./Styled-components.js";

import { links } from "./data.js";
const Navbar = ({ current, setCurrent }) => {
  console.log("rendered");

  const progressedSections = useRef([]);
  const navEl = useRef(null);

  useEffect(() => {
    console.log("effect");
    if (!progressedSections.current.includes(current)) {
      progressedSections.current = [...progressedSections.current, current];
    }
    console.log(progressedSections.current);
  }, [current]);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(navEl.current.offsetHeight);
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
              className={text === current ? "active" : null}
              key={`${text}-${index}`}
            >
              <a href={url} onClick={handleClick}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ProgressBar
        fraction={progressedSections.current.length / links.length}
      />
      <div>{progressedSections.current}</div>
    </NavBar>
  );
};

export default React.memo(Navbar);
