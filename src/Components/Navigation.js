import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const styleActive = {
  textDecoration: "underline",
};

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationMaxWidth>
        <li>
          <NavLink
            to="/contacts"
            className="default-link"
            style={({ isActive }) => (isActive ? styleActive : undefined)}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/appointments"
            className="default-link"
            style={({ isActive }) => (isActive ? styleActive : undefined)}
          >
            Appointments
          </NavLink>
        </li>
      </NavigationMaxWidth>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationMaxWidth = styled.ul`
  display: flex;
  gap: 100px;
  li {
    list-style: none;
  }
`;

export default Navigation;
