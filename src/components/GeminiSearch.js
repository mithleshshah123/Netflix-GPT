import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestion from "./GeminiMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GeminiSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <GeminiSearchBar />
      <GeminiMovieSuggestion />
    </div>
  );
};

export default GeminiSearch; 
