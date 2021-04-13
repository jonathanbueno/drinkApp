import React, { useState } from "react";

import HamburgerButton from "../../UI/HamburgerButton";

const Menu = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <HamburgerButton boolean={toggleNav} callback={setToggleNav} />
      {toggleNav && (
        <nav>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
