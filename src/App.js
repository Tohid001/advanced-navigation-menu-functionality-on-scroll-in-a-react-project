import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledSection } from "./Styled-components";
import { links } from "./data";
import { useScrollspy } from "./useScrollspy.js";
import Navbar from "./Navbar.js";

function App() {
  const [sections, setSections] = useState([]);
  const [currentIntersectingElementIndex] = useScrollspy(sections, {
    root: document.querySelector("#main"),
    offset: 20,
  });

  // // const sectionRefs = useRef([]);
  // // console.log(sectionRefs.current);
  // // console.log("app", currentIntersectingElementIndex);

  // const addtoRefs = (el) => {
  //   if (el && !sectionRefs.current.includes(el)) {
  //     sectionRefs.current.push(el);
  //   }
  // };

  useEffect(() => {
    // console.log("appEFF");
    // setSections(sectionRefs.current);
    const sectionElements = links.map(({ text }) =>
      document.querySelector(`section[id="${text}"]`)
    );
    // console.log(sectionElements);
    setSections(sectionElements);
  }, []);

  return (
    <main id="main">
      {/* <Navbar
      // current={
      //   sections.length > 0
      //     ? sections[currentIntersectingElementIndex].id
      //     : null
      // }
      /> */}
      {links.map(({ Component, text }, index) => (
        <Component
          // ref={addtoRefs}
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

// const Wrapper = styled.div`
//   display: flex;
//   width: 300px;
// `;

// const Content = styled.div`
//   height: 500px;
//   overflow-y: scroll;
// `;

// const TableOfContent = styled.div`
//   width: 100px;
// `;

// const List = styled.div`
//   position: relative;
// `;

// const Section = styled.section`
//   height: 500px;
//   width: 175px;
//   display: block !important;
// `;

// const useScrollspy = (elements, options) => {
//   const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
//     useState(-1);

//   const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;

//   const observer = React.useRef();

//   useEffect(() => {
//     if (observer.current) {
//       observer.current.disconnect();
//     }

//     observer.current = new IntersectionObserver(
//       (entries) => {
//         // console.log(entries);
//         // find the index of the section that is currently intersecting
//         const indexOfElementIntersecting = entries.findIndex((entry) => {
//           return entry.intersectionRatio > 0;
//         });
//         console.log(indexOfElementIntersecting);

//         // set this index to the state
//         setCurrentIntersectingElementIndex(indexOfElementIntersecting);
//       },
//       {
//         root: (options && options.root) || null,
//         // use this option to handle custom offset
//         rootMargin,
//       }
//     );

//     const { current: currentObserver } = observer;

//     // observe all the elements passed as argument of the hook
//     elements.forEach((element) =>
//       element ? currentObserver.observe(element) : null
//     );

//     return () => currentObserver.disconnect();
//   }, [elements, options, rootMargin]);

//   return [currentIntersectingElementIndex];
// };

// const Article = () => {
//   const ids = ["part1", "part2", "part3", "part 4", "part 5", "part 6"];
//   const [elements, setElements] = useState([]);
//   const [currentActiveIndex] = useScrollspy(elements, {
//     root: document.querySelector("#demo-root"),
//     offset: 20,
//   });

//   /**
//    You can ignore this, it's only here so it plays nicely with SSR :)
//   */
//   useEffect(() => {
//     const widgetElements = ids.map((item) =>
//       document.querySelector(`section[id="${item}"]`)
//     );

//     setElements(widgetElements);
//   }, []);

//   return (
//     <Wrapper>
//       <TableOfContent>
//         <List>
//           {ids.map((id, index) => (
//             <li
//               key={id}
//               style={{
//                 color:
//                   currentActiveIndex === index
//                     ? "var(--maximeheckel-colors-brand)"
//                     : "",
//               }}
//             >
//               Part {index + 1}
//             </li>
//           ))}
//         </List>
//       </TableOfContent>
//       <Content id="demo-root">
//         {ids.map((id, index) => (
//           <Section key={id} id={id}>
//             <div>Part {index + 1}</div>
//             Some Content
//           </Section>
//         ))}
//       </Content>
//     </Wrapper>
//   );
// };

// const Example = () => {
//   /**
//    You can ignore this, it's only here so it plays nicely with SSR :)
//   */
//   if (typeof window === "undefined") {
//     return null;
//   }

//   return <Article />;
// };

// // import React from 'react'

// function App() {
//   return <Example />;
// }

// export default App;
