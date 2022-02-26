import React, { useState, useRef, useEffect } from "react";

export function useHighlightMenuOnScroll() {
  const [current, setCurrent] = useState("home");

  const highLightRefs = useRef([]);

  const addtoRefs = (el) => {
    if (el && !highLightRefs.current.includes(el)) {
      highLightRefs.current.push(el);
    }
  };

  useEffect(() => {
    let activeElement;
    const options = { threshold: 0.5 };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          activeElement = entry.target.id;
          if (!(current === activeElement)) {
            setCurrent(activeElement);
          }
        }
      });
    }, options);
    highLightRefs.current.forEach((element, index) => {
      observer.observe(element);
    });
  }, [current, highLightRefs.current]);

  return [current, setCurrent, highLightRefs, addtoRefs];
}
