import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import { useState } from 'react';

import Button from 'react-bootstrap/Button';

export default function ModalMovie({ movies }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handelFormSubmit(e) {
        e.preventDefault();
        let comment = e.target.comment.value;
        addToFavList(movies, comment);
    }

    async function addToFavList(movies, comment) {

        console.log(movies);
        console.log(comment);

        const url = "https://hamza-movies-library.herokuapp.com/addMovie"
        // // This should match the required data in the server
        const data = {
            id: movies.id,
            title: movies.title,
            release_date: movies.release_date,
            poster_path: movies.poster_path,
            overview: movies.overview,
            comment: comment
        }
        // Use Fetch to send POST request
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add to favorite
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{movies.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {movies.release_date} <br />
                    {movies.overview}
                </Modal.Body>

                <Form onSubmit={handelFormSubmit} style={{ margin: "10px" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="comment" type="text" placeholder="Enter Comment" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>

            </Modal>
        </>
    );
}