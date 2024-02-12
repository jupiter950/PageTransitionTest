import React, { useEffect, useRef} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pages } from "../data";

const Wrapper = styled.div`
  display: flex;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 32px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const Nav = styled.nav`
  flex: none;
  margin: 0 auto;
`;

const NavLink = styled.a`
  border-radius: 8px;
  flex: none;
  font-weight: 500;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color 200ms ease;
  opacity: 0;

  &:hover {
    background-color: rgba(47, 66, 80, 0.2);
  }
`;

export function Navigation(props) {
  const timerRef = useRef(null);
console.log(pages);
  useEffect(() => {
    startPressingNavLinks();

    // Clean up the timer on component unmount
    return () => clearTimeout(timerRef.current);
  }, []);

  const startPressingNavLinks = () => {
    const navLinks = document.querySelectorAll('nav a');
    let currentIndex = 0;

    const pressNextLink = () => {
      const currentLink = navLinks[currentIndex];
      currentLink.click();

      currentIndex = (currentIndex + 1) % navLinks.length;

      timerRef.current = setTimeout(pressNextLink, pages[currentIndex == 0 ? 5 : currentIndex-1].pages[0].contents[0].duration);
    };

    timerRef.current = setTimeout(pressNextLink, 0);
  };

  return (
    <Wrapper {...props}>
      <Nav>
        {pages.map((page, index) => (
          <NavLink as={Link} key={index} to={page.path}>
            {page.title}
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
}
