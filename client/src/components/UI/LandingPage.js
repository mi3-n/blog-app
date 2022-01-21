import React, { useEffect } from 'react';
import { Container, Row, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import "./LandingPage.css"

const LandingPage = () => {

    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/blog")
        }
    }, []);

    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="main-area">
                        <div>
                            <h1>Welcome to Mizuki's Blog!</h1>
                            <div className="button-area">
                                <a href="/login">
                                    <Button size="lg" variant="primary" className="mainButtons">Login</Button>
                                </a>
                                <a href="/register">
                                    <Button size="lg" variant="outline-primary" className="mainButtons">Register</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
