import React, { useEffect } from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import "./Posts.css";
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from '../../actions/postsActions';
import { useNavigate } from 'react-router';


const Posts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postList = useSelector(state => state.postList)
    const { posts, error } = postList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        dispatch(listPosts())
        if (!userInfo) {
            navigate("/")
        }
    }, [dispatch])

    return (
        <Row xs={1} md={4} className="allPosts g-4">
            {posts?.map((post) => (
                <Col key={post._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body style={{ paddin: '10px 0' }}>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                            <Badge>{post.category}</Badge>
                            <div className="postButtons">
                                <Button variant="primary" size="sm" href={`/blog/posts/${post._id}`}>Update</Button>
                                <Button variant="outline-primary" size="sm">Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default Posts;
