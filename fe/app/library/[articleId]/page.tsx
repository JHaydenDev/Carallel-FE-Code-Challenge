"use client";
import React from "react";
import { useRouter } from "next/router";

const ArticleDetails = ({
  searchParams,
}: {
  searchParams: {
    articleId: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    soundFile: string;
    videoFile: string;
  };
}) => {
  return (
    <div className="mx-4 my-14">
      <div className="flex bg-article-yellow rounded-lg h-32 justify-end">
        <img
          className="h-28 w-1/2 m-auto "
          src="/articleCard.svg"
          alt="article card"
        />
        <span style={{ fontFamily: "serif" }} className="text-4xl w-1/2 mt-10">
          We're all caregivers
        </span>
      </div>
      <div className="flex justify-self-start	w-full my-5">
        <img
          className=" hover:text-link-text-selected"
          src={"/bookmark.svg"}
          alt={"bookmark"}
        />
        <span className="text-link-text-selected font-semibold	">Bookmark</span>
      </div>
      <h1 style={{ fontFamily: "serif" }} className="text-4xl mb-3">
        {searchParams.title}
      </h1>
      <p className="mb-3">{searchParams?.p1}</p>
      <iframe
        className="mb-3"
        src="https://www.youtube.com/embed/RR2EI8EEOOw?si=v6VQNR_GQ7aSgJ-T"
        title="YouTube video player"
        width="390"
        height="250"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="mb-3">
        <span style={{ fontFamily: "serif" }} className="text-2xl w-1/2 mb-3">
          You are a caregiver
        </span>
        <div className="w-full bg-sound-player-gray h-12 flex ">
          <span className="my-auto"> Sound Player Here</span>
        </div>
      </div>
      <p className="mb-3">{searchParams?.p1}</p>
      <p className="mb-3">{searchParams?.p2}</p>
      <p className="mb-3">{searchParams?.p1}</p>
      <div className="flex-col flex">
        <button className="bg-button-orange w-fit rounded-full text-white	m-1 p-1">
          New in Caregiving
        </button>
        <button className="bg-button-orange w-fit rounded-full text-white m-1	p-1">
          What to expect
        </button>
      </div>

      <div className="flex my-4">
        <img
          className=" hover:text-link-text-selected mr-12 ml-1"
          src={"/thumbsUp.svg"}
          alt={"thumbs up"}
        />
        <img
          className=" hover:text-link-text-selected"
          src={"/thumbsDown.svg"}
          alt={"thumbs down"}
        />
      </div>

      <span className="text-2xl w-1/2 mb-5" style={{ fontFamily: "serif" }}>
        Related Resources
      </span>
      <div className="flex mt-5">
        <div className="flex flex-col w-1/3 mr-3 ">
          <img
            className="bg-article-orange h-20 w-full rounded-lg	"
            src="/articleCard.svg"
            alt="article card"
          />
          <span className="text-center">Related Article Card</span>
        </div>
        <div className="flex flex-col w-1/3">
          <img
            className="h-20 w-full bg-article-green	rounded-lg"
            src="/articleCard.svg"
            alt="article card"
          />
          <span className="text-center">Related Article Card</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
