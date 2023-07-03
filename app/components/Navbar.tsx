"use client";

import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
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
    <div className="sticky top-0 flex flex-row justify-end bg-emerald-300">
      {windowWidth < 560 ? (
        <div className="flex flex-col items-end">
          <IoMenuOutline size={30} onClick={() => setToggle(!toggle)}/>
          {toggle ? (
            <div className="flex flex-col">
              <MenuItem label="Home" section="#home"/>
              <MenuItem label="Projects" section="#projects"/>
              <MenuItem label="About" section="#about"/>
              <MenuItem label="Contact" section="#contact"/>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-row gap-6">
          <MenuItem label="Home" section="#home"/>
          <MenuItem label="Projects" section="#projects"/>
          <MenuItem label="About" section="#about"/>
          <MenuItem label="Contact" section="#contact"/>
        </div>
      )}
    </div>
  );
};

export default Navbar;
