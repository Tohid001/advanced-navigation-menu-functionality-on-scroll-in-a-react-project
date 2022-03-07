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
        /* transition: all 1s ease; */
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
        background-color: #0095ff;
        transition: all 0.3s ease;
        transform-origin: left;
        transform: scaleX(0);
      }
    }
  }

  .active {
    & a {
      font-weight: bold;
      transform: scaleX(1.2);
    }

    &:before {
      transform: scaleX(1);
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${({ section }) => {
    switch (section) {
      case "home":
        return "#fcad03";
        break;
      case "about":
        return "#03fc7b";
        break;
      case "education":
        return "#67b5a7";
        break;
      case "skills":
        return "#2fcbd4";
        break;
      case "projects":
        return "#a903fc";
        break;
      case "contact":
        return "#fc03fc";
        break;

      default:
        break;
    }
  }};
  font-size: 2rem;
`;

export const ProgressBar = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 5px;
  position: relative;
  background: #66727a;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: red;
    transform-origin: left;
    transition: all 0.5s ease;
    transform: ${(props) => `scaleX(${props.fraction})`};
  }
`;
