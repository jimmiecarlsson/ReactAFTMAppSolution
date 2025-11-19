
import React from 'react'
import { Container, Row, Col, Card, Alert, Badge, Image } from "react-bootstrap"
import { Link } from "react-router-dom";

const InfoPage = () => {




    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <div className="text-white">
                            Mer info kommer här sen.
                        </div>  
                        <Link to="/">
                            Tillbaka
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InfoPage;
