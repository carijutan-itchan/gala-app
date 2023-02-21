import React, { FC } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

export interface MainNavProps {
  isTop: boolean;
}

const MainNav: FC<MainNavProps> = ({ isTop }) => {
  return (
    <div
      className={`nc-MainNav1 relative z-10 ${isTop ? "onTop " : "notOnTop backdrop-filter"
        }`}
    >
      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
        <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
          <h1>LOGO</h1>
          <h1>Navigation</h1>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <h1>Search text field</h1>
            <div className="px-1" />
            {/* @ts-ignore */}
            <ButtonPrimary buttonName="Sign up"></ButtonPrimary>
          </div>
          <div className="flex items-center xl:hidden">
            <h1>MENU BAR</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav