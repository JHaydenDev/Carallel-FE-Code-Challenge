import React, { useEffect, useState } from "react";

//should eventually make the header text dynamic based on what page you are viewing.
const Header = () => {
  return (
    <div className="absolute h-12 top-0 left-0 w-full bg-body flex justify-around ">
      <button className="pt-3">
        <img src="/settings.svg" alt="settings" />
      </button>
      <div className="pt-3 mx-20 my-auto font-medium">
        <span className="text-center" style={{ fontFamily: "serif" }}>
          Library
        </span>
      </div>
      <button className="pt-3">
        <img src="/notifications.svg" alt="settings" />
      </button>
    </div>
  );
};

export default Header;
