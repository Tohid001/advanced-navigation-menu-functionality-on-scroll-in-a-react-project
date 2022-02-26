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
  };

  const handleScroll = (e) => {
    let current = "";
    highLightRefs.current.forEach((element) => {
      const top = element.offsetTop;
      const height = element.offsetHeight;
      if (window.scrollY >= top - height / 2 && window.scrollY < top + height) {
        current = element.getAttribute("id");
        console.log(current);
      }
    });
    for (var item in activeNavItems) {
      // activeNavItems[item] = false;
      setActiveNavItems((prev) => {
        return { ...prev, [item]: false, [current]: true };
      });
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [activeNavItems, setActiveNavItems, highLightRefs, addtoRefs];
}
