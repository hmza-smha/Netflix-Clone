
import React from "react";
import { useState, useEffect } from "react";

import NavBar from "../Navbar/Navbar";
import FavCard from "./FavCard"

export default function FavList() {
    const [FavMovies, setFavMovies] = useState([]);

    async function getFavMovies() {
        const response = await fetch("https://hamza-movies-library.herokuapp.com/getmovies");
        const data = await response.json();

        setFavMovies(data);
    }

    useEffect(() => {
        getFavMovies();
    }, []);

    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly"
    };
    return (
        <>
            <NavBar />
            <div style={styles}>
            {
            FavMovies && FavMovies.map((movie) => {
                    return (
                        <FavCard movie={movie} getFavMovies={getFavMovies} />
                    );
                })
            }
            </div>
        </>
    );
}