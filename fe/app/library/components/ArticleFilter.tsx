"use client";
import React from "react";

// here i would normally set up handlers to filter the articles based on which was clicked.  Also swapping the background and text color when selected.
const ArticleFilter = () => {
  return (
    <div className="flex h-16 mt-20 w-full bg-body-color font-semibold text-sm	">
      <div className="flex justify-around w-full my-auto">
        <div className="bg-filter-green text-header-color px-3 py-1.5 rounded-full">
          All
        </div>
        <div className="bg-header-color text-filter-green px-3 py-1.5 rounded-full">
          Shared
        </div>
        <div className="bg-header-color text-filter-green px-3 py-1.5 rounded-full">
          Bookmarks
        </div>
        <div className="bg-header-color text-filter-green px-3 py-1.5 rounded-full">
          Read
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
