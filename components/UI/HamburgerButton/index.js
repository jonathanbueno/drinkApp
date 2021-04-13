import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;

const Path = styled.path`
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  &.line1 {
    stroke-dasharray: ${({ open }) => (!open ? "60 207" : "90 207")};
    stroke-dashoffset: ${({ open }) => (!open ? "0" : "-134")};
  }
  &.line2 {
    stroke-dasharray: ${({ open }) => (!open ? "60 60" : "1 60")};
    stroke-dashoffset: ${({ open }) => (!open ? "0" : "-30")};
  }
  &.line3 {
    stroke-dasharray: ${({ open }) => (!open ? "60 207" : "90 207")};
    stroke-dashoffset: ${({ open }) => (!open ? "0" : "-134")};
  }
`;

const HamburgerButton = ({ boolean, callback }) => {
  return (
    <Button onClick={() => callback(!boolean)} aria-label="Main Menu">
      <svg width="50" height="50" viewBox="0 0 100 100">
        <Path
          open={boolean}
          className="line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <Path open={boolean} className="line2" d="M 20,50 H 80" />
        <Path
          open={boolean}
          className="line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </Button>
  );
};

export default HamburgerButton;
