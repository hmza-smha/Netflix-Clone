import React from 'react';

import MovieCard from '../Movie/MovieCard';

export default function MoviesList({ movies }) {
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
    };
    return (
        <>
        <div style={styles}>

            {
                movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            <MovieCard movie={movie} />
                        </div>
                    )
                })
            }
            
        </div>
            
        </>
    )
}