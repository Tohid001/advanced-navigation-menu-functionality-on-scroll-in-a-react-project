import React, { useRef, useState } from "react";
import { NavBar } from "./Styled-components.js";

import { links } from "./data.js";
const Navbar = ({ activeNavItems, setActiveNavItems }) => {
  console.log("rendered");

  const navEl = useRef(null);
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
        {links.map(({ url, id, text }) => {
          return (
            <li className={activeNavItems[text] ? "active" : null}>
              <a href={url} key={id} onClick={handleClick}>
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
