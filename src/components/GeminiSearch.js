import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestion from "./GeminiMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GeminiSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={BACKGROUND_IMG} alt="background-img" />
      </div>
    <div className="">
      <GeminiSearchBar />
      <GeminiMovieSuggestion />
    </div>
    </>
  );
};

export default GeminiSearch; 
