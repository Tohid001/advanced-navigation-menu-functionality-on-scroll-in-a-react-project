import styled from "styled-components";

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: pink;
  & ul {
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    justify-content: center;
    & li {
      position: relative;
      & a {
        text-decoration: none;
        all: unset;
        cursor: pointer;
        display: inline-block;
        padding: 15px;
        transition: all 0.5s ease-in-out;
        &:hover {
          font-weight: bold;
        }
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5px;
        border-radius: 40px;
        background-color: red;
        transition: all 0.3s ease-in-out;
        transform-origin: left;
        transform: scaleX(0);
      }
    }
  }

  .active {
    & a {
      /* font-weight: bold; */
    }

    &:before {
      transform: scaleX(1);
    }
  }
`;

export const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${({ section }) =>
    section === "home"
      ? "#fcad03"
      : section === "about"
      ? "#03fc7b"
      : section === "projects"
      ? "#a903fc"
      : "#fc03fc"};
  font-size: 2rem;
`;
