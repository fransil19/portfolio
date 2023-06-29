"use client";

import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <div>LOGO</div>
      {windowWidth < 560 ? (
        <div className="flex flex-col items-end">
          <IoMenuOutline size={30} onClick={() => setToggle(!toggle)}/>
          {toggle ? (
            <div>
              <MenuItem label="Projects" onClick={() => {}}/>
              <MenuItem label="About" onClick={() => {}}/>
              <MenuItem label="Contact" onClick={() => {}}/>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-row gap-6">
          <MenuItem label="Projects" onClick={() => {}}/>
          <MenuItem label="About" onClick={() => {}}/>
          <MenuItem label="Contact" onClick={() => {}}/>
        </div>
      )}
    </div>
  );
};

export default Navbar;
