"use client";
import React from "react";
import { useRouter } from "next/router";

const ArticleDetails = ({
  searchParams,
}: {
  searchParams: {
    id: string;
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
    <div>
      Article
      {searchParams?.title}
      <p>{searchParams?.p1}</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RR2EI8EEOOw?si=v6VQNR_GQ7aSgJ-T"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p>{searchParams?.p2}</p>
      <p>{searchParams?.p3}</p>
      <p>{searchParams?.p4}</p>
    </div>
  );
};

export default ArticleDetails;

// {  "id":"1",
//   "title": "Poke Ipsum",
//   "p1": "Pokem ipsum dolor sit amet Registeel Turtwig Beedrill we're blasting off again Wartortle Grumpig. Bubble Clamperl Jigglypuff Chansey Piplup Skorupi Swablu. V for victory Togepi Ash's mother Hippowdon I like shorts Castform Raticate. Fog Badge Grotle Hypno Chimchar Slowking Floatzel Johto. Poison Dodrio Politoed Tropius Azelf Fuchsia City Elgyem.",
//   "p2": "Poke Ipsum",
//   "p3": "Poke Ipsum",
//   "p4": "Poke Ipsum",
//   "soundFile": "Poke Ipsum",
//   "video": {
//      "width":"560",
//         "height":"315",
//         "src":"https://www.youtube.com/embed/RR2EI8EEOOw?si=v6VQNR_GQ7aSgJ-T",
//         "title":"YouTube video player",
//         "frameBorder":"0",
//         "allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
//         "allowFullScreen":true
//   }
// }
