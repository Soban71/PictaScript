import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Make sure to install react-icons
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 98%;
  background: #405d72;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: white;

  img {
    height: 40px; /* Adjust the size of the image */
    width: auto; /* Maintain aspect ratio */
    margin-right: 0.5rem;
  }
  img &:first-child {
    height: 140px; /* Adjust the size of the image */
    width: auto; /* Maintain aspect ratio */
    margin-right: 0.5rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #6b00b6, #8f00ff);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
  }
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  word-spacing: 0.6rem;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #e0e0e0;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <img src="/Images/logo.gif" alt="Logo" />
      </Logo>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
}

export default Navbar;
