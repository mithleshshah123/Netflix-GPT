import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import {model} from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import {addGeminiMovieResult} from "../utils/geminiSlice"

const GeminiSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json?.results;
  }

  const handleGeminiSearchClick = async() => {
    console.log(searchText.current.value);

  const prompt = "Act as a movie recommendation system and suggest some movies for the query "+searchText.current.value+". only give me names of 10 movies, comma separated like the exapmle result given ahead. Example Results: Gaadar, Sholay, Don,Koi MIl Gaya, Golmaal ";

const result = await model.generateContent(prompt);
console.log(result.response.text());

const geminiMovies = result?.response?.text()?.split(",");

const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

const tmdbResults = await Promise.all(promiseArray);
console.log(tmdbResults);

dispatch(addGeminiMovieResult({movieNames:geminiMovies, movieResults:tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].geminiSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGeminiSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
