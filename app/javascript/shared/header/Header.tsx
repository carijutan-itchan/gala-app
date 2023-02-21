import React, { FC } from "react";
import MainNav from "./MainNav";
import { useEffect } from "react";
import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

export interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
  const [isTop, setisTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const scrollFunction = () => {
    const $head = document.getElementById("gala-header-id");
    if (!$head) return;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      !!isTop && setisTop(false);
    } else {
      setisTop(true);
    }
  };

  return (
    <div
      id="gala-header-id"
      className="nc-Header sticky top-0 w-full left-0 right-0 z-40"
    >
      <MainNav isTop={isTop} />
    </div>
  );
};

export default Header;

