import React from "react";
import { node } from "prop-types";
import styled from "styled-components";

import Menu from "../Menu";
import Logo from "../../Logo";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Logo />
        {/* <Menu /> */}
      </Header>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
