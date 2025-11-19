import React, { useState } from "react";
import { Container, Row, Col, Card, Alert, Badge, Image } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FaGithub } from "react-icons/fa";

import AFTMSelect from "./components/AFTMSelect"
import LengthSlider from "./components/LengthSlider"

import { getIndicator } from "./utils/getIndicator"
import { calcGramsPerMeter } from "./utils/calcPerMeter"
import { calcHeadWeight } from "./utils/calcWeight"
import { getAftmData } from "./utils/getAftmData"
import imgQR from "./assets/qrcode.png"


//triggar deploy
function App() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    

    const [aftm, setAftm] = useState("");
    const [length, setLength] = useState(9.14);

    const aftmInfo = getAftmData(aftm);
    const weight = calcHeadWeight(aftm, length);
    const gramsPerMeter = calcGramsPerMeter(aftm);


    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-sm">
                        <Card.Body>

                            <h2 className="text-center mb-4">AFTM Kalkylator</h2>

                            <AFTMSelect value={aftm} onChange={setAftm} />

                            {aftmInfo && (
                                <>
                                    <Alert variant="secondary">
                                        Vikt för klassen: {gramsPerMeter} g/m
                                    </Alert>
                                    <Alert variant="secondary">
                                        <strong>Vikter enligt AFTM:</strong><br />
                                        Minimum: {aftmInfo.minWeight} g<br />
                                        Standard: {aftmInfo.stdWeight} g<br />
                                        Maximum: {aftmInfo.maxWeight} g
                                    </Alert>
                                </>
                            )}                            
                            <LengthSlider value={length} onChange={setLength} />
                            {aftm && (
                                <>
                                    <div className="mt-0 mb-3">
                                        Klumpens vikt: <strong>{weight} g</strong>
                                    </div>

                                    {(() => {
                                        const indicator = getIndicator(weight, aftmInfo);
                                        return (
                                            <div className="text-center mb-3 p-4">
                                                <Badge bg={indicator.color} pill className="px-5 py-4 fs-5">
                                                    {indicator.text}
                                                </Badge>
                                            </div>
                                        );
                                    })()}
                                </>
                            )}
                            

                            <div className="text-center mt-5">
                                <a href="https://jimmiecarlsson.github.io/" target="_blank" rel="noreferrer nofollow">Kodad av <FaGithub /></a>
                            </div>
                            <div className="text-left mt-2">
                                <Card.Link onClick={() => handleShow(fullscreen)}>Dela</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal size="sm" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>AFTM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Image src={imgQR} rounded fluid/>
                        </Col>
                    </Row>
                    <a href="https://aftm-9d6548381914.herokuapp.com/" target="_blank" rel="noreferrer nofollow">https://aftm-9d6548381914.herokuapp.com/</a>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default App;
