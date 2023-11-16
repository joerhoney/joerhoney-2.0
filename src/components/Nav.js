import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Icon from "../components/Icon";

const Nav = () => {
  return (
    <Wrapper className="nav">
      <ul>
        <li className="logo">
          <Link to="/" activeClassName="current-page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/developer" activeClassName="current-page">
            Developer
          </Link>
        </li>
        <li>
          <Link to="/artist" activeClassName="current-page">
            Artist
          </Link>
        </li>
        <li>
          <Link to="/resume" activeClassName="current-page">
            Résumé
          </Link>
        </li>
        <li>
          <Link to="#contact" title="Contact">
            Contact
          </Link>
        </li>
      </ul>
      <Icon label="false" name="Hamburger" />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  position: fixed;
  top: 10px;
  z-index: 999;
  ul::before {
    background-image: var(--gradNav);
    content: "";
    display: block;
    height: 545px;
    left: -44px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    top: -54px;
    transition: all 1s cubic-bezier(0, 0, 0.15, 1);
    width: 185px;
  }
  ul:is(:hover, :focus)::before {
    height: 1338px;
    left: -44px;
    top: -157px;
    width: 440px;
  }
  ul {
    display: block;
    font-family: "Rubik", sans-serif;
    padding: 16px 8px 16px 64px;
    position: absolute;
    rotate: 22deg;
    top: -17px;
    transition: all 0.3s ease;
  }
  ul li {
    display: flex;
  }
  ul li a {
    color: var(--color3);
    display: block;
    font-weight: 700;
    position: relative;
    text-decoration: none;
    text-transform: lowercase;
    transition: all 0.5s ease;
  }
  .devicon {
    color: var(--color3);
    display: none;
    left: 84px;
    position: absolute;
    rotate: 22deg;
    top: 33px;
    width: 40px;
  }
  @media (hover: hover) {
    ul li a {
      color: var(--color3);
      /* opacity: 0.6; */
    }
    ul:hover li a {
      color: var(--color3);
      /* opacity: 0.8; */
    }
    ul li a:not(.current-page):is(:active, :focus, :hover) {
      color: var(--accent);
      /* opacity: 1; */
    }
  }
  /* ul li a:before {
    content: "-\\0000a0";
    left: 0px;
  } */
  ul li.logo a {
    background: unset;
    /* background-clip: unset; */
    -webkit-background-clip: unset;
    display: block;
    /* height: 0; */
    /* left: -22px;
    overflow: hidden;
    padding: 94px 0 0 60px; */
    position: relative;
    /* top: 5px; */
    /* width: 0; */
    -webkit-text-fill-color: unset;
  }
  ul li.logo a:before {
    content: ":j";
    display: block;
    font-size: 90px;
    left: -58px;
    letter-spacing: 0.3rem;
    position: absolute;
    top: 30px;
  }
`;
