import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`



 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin:0;
  padding:0;
  font-family: Inter;
}

&:root{
    --primary-base:#049673;
    --primary-dark:#032019;
    --primary-light:#CDEAE3;  
    --primary-Dlight:#B7E2D8;
    --primary-deep:#008867;

    --secondary-base:#FFB900;

    --text-head:#201700;
    --text-para:#666155;
    --text-paralight:#7E7B72;

    --other-bgdark:#100C00;
    --other-strokedark:#666155;
    --other-bglight:#F3F3F3;
    --other-strokelight:#CAC5BA;
    
    
  }

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* body{
  height:20000px;
  position:relative;
} */

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
a{
  text-decoration:none;
  color:white;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}



 `;
