import React from "react";
import { node } from "prop-types";
import styled from "styled-components";

import Menu from "../Menu";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header>{/* <Menu /> */}</Header>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
