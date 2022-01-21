import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../actions/userActions';

const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/blog")
        }
    }, [userInfo])

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div className="loginAll">
            <Container className="loginArea">
                {error && <ErrorMessage error={error} />}
                <Form className="loginForm" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Row className="loginRegister">
                        <Col>New Customer ? <Link to='/register'>Register Here</Link></Col>
                    </Row>
                </Form>
            </Container>
        </div >
    )
}

export default LoginPage
