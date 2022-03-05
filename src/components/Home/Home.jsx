import React, { useState, useEffect } from 'react';
import MoviesList from '../MovieList/MovieList';

export default function Home() {
  // every time movies changed, react will re-render this component;
  // so useEffect with empty deps, means render just ONCE when changed;
  
  const [movies, setMovies] = useState([]);

  async function getData(){
    let response = await fetch("https://hamza-movies-library.herokuapp.com/trending");
    let data = await response.json();
    setMovies(data);

  }

  useEffect(()=>{
    getData();
  },[]);

    return (
      <>
      <h1>This is home</h1>
      {movies && <MoviesList movies={movies} />}
      </>
    )
}