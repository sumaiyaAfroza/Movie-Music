import React from 'react';
import {getAllMovies} from "../data/movies.js";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  const movies = getAllMovies()
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7'>
      {
        movies.map(movie =>
        <MovieCard key={movie.id} movie={movie} />
        )
      }
    </div>
  );
};

export default MovieList;