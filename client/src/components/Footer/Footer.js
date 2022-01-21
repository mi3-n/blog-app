import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer
            style={{
                width: "100%",
                position: "relative",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#886F6F",
            }}
        >
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; Mizuki
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;