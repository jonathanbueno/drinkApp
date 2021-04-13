import React from "react";
import styled from "styled-components";

const Img = styled.img`
  margin-left: 15px;
`;

const Logo = () => {
  return <Img src={require("../../static/media/logo.png")} width="170" />;
};

export default Logo;
