import React, { useState, useRef, useEffect } from "react";

export function useHighlightMenuOnScroll() {
  const [current, setCurrent] = useState("home");

  const highLightRefs = useRef([]);

  const addtoRefs = (el) => {
    if (el && !highLightRefs.current.includes(el)) {
      highLightRefs.current.push(el);
    }
  };

  const handleScroll = (e) => {
    let activeElement = "";
    highLightRefs.current.forEach((element) => {
      const top = element.offsetTop;
      const height = element.offsetHeight;
      if (window.scrollY >= top - height / 2 && window.scrollY < top + height) {
        activeElement = element.getAttribute("id");
        setCurrent(activeElement);
      }
    });
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [current, setCurrent, highLightRefs, addtoRefs];
}
