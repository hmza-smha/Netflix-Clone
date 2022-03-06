import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar(){

    let styles = {
        fontSize: "25px",
        margin: "10px 25px",
        display: "inline-block"
    }
    return(
        <nav>
            <Link style={styles} to="/">Home</Link>
            <Link style={styles} to="/favorite">Favorite movies</Link>
        </nav>
    )
}