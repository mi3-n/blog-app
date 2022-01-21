import React, { useState } from 'react'
import { Card, Button, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createPostAction } from '../../actions/postsActions';
import ErrorMessage from './ErrorMessage';
import "./CreatePost.css"

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const postCreate = useSelector((state) => state.postCreate);
    const { error, post } = postCreate;

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title || !content || !category) return;

        dispatch(createPostAction(title, content, category));

        navigate("../blog/posts")
    };

    return (
        <Row className="createPost">
            <Card className='createForm'>
                <Card.Header>Create a new Note</Card.Header>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                value={title}
                                placeholder="Enter the title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={content}
                                placeholder="Enter the content"
                                rows={4}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="content">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="content"
                                value={category}
                                placeholder="Enter the Category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Create Note
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default CreatePost
