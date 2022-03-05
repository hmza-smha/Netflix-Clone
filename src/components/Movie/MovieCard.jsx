import React from 'react';
import Card from 'react-bootstrap/Card';

import ModalMovie from '../ModalMovie/ModalMovie';

export default function MovieCard({movie}){
    return (
        <Card key={movie.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.release_date}
                </Card.Text>
                <Card.Text>
                    {movie.overview}
                </Card.Text>
            </Card.Body>
            <ModalMovie movies={movie} />
        </Card>
    )
}