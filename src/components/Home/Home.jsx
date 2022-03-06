import React, { useState, useEffect } from 'react';
import MoviesList from '../MovieList/MovieList';
import NavBar from '../Navbar/Navbar';

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
      <NavBar />
      {movies && <MoviesList movies={movies} />}
      </>
    )
}