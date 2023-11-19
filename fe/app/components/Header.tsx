import React, { useEffect, useState } from "react";

//should eventually make the header text dynamic based on what page you are viewing.
const Header = () => {
  return (
    <div className="fixed h-12 top-0 left-0 w-full bg-header-color  ">
      <div className="flex justify-around mt-5">
        <button>
          <img src="/settings.svg" alt="settings" />
        </button>
        <div className=" mx-20 my-auto font-medium">
          <span
            className="text-center font-medium "
            style={{ fontFamily: "serif" }}
          >
            Library
          </span>
        </div>
        <button>
          <img src="/notifications.svg" alt="settings" />
        </button>
      </div>
    </div>
  );
};

export default Header;
