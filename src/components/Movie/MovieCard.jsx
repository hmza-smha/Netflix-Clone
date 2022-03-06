import React from 'react';
import Card from 'react-bootstrap/Card';

import ModalMovie from '../ModalMovie/ModalMovie';

export default function MovieCard({movie}){

    return (
        <Card key={movie.id} style={{ width: '18rem', height:"500px", backgroundColor:"#eee", margin:"30px" }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.release_date}
                </Card.Text>
                <Card.Text>
                    <img style={{width:"200px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="pic"></img>
                </Card.Text>
            </Card.Body>
            <ModalMovie movies={movie} />
        </Card>
    )
}