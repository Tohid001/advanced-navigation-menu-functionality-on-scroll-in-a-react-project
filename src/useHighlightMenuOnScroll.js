import React, { useState, useRef, useEffect } from "react";

export function useHighlightMenuOnScroll() {
  const [activeNavItems, setActiveNavItems] = useState({
    home: true,
    about: false,
    contact: false,
    projects: false,
  });

  const highLightRefs = useRef([]);

  const addtoRefs = (el) => {
    if (el && !highLightRefs.current.includes(el)) {
      highLightRefs.current.push(el);
    }
    console.log(highLightRefs.current);
  };

  return [activeNavItems, setActiveNavItems, highLightRefs, addtoRefs];
}
