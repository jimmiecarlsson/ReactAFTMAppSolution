import React, { useState } from "react";
import { Container, Row, Col, Card, Alert, Badge } from "react-bootstrap"

import AFTMSelect from "./components/AFTMSelect"
import LengthSlider from "./components/LengthSlider"
import { getIndicator } from "./utils/getIndicator"
import { calcGramsPerMeter } from "./utils/calcPerMeter";


import { calcHeadWeight } from "./utils/calcWeight"
import { getAftmData } from "./utils/getAftmData"

//triggar deploy
function App() {
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

                            <h3 className="text-center mb-4">AFTM Viktkalkylator</h3>

                            <AFTMSelect value={aftm} onChange={setAftm} />

                            {aftmInfo && (
                                <Alert variant="primary">
                                    <strong>Standardvikt:</strong><br />
                                    Min: {aftmInfo.minWeight} g<br />
                                    Std: {aftmInfo.stdWeight} g<br />
                                    Max: {aftmInfo.maxWeight} g
                                </Alert>
                            )}

                            <LengthSlider value={length} onChange={setLength} />

                            {aftm && (
                                <>
                                    <Alert variant="success" className="text-center">
                                        Klumpvikt: <strong>{weight} g</strong>
                                    </Alert>

                                    <Alert variant="info" className="text-center">
                                        Vikt per meter: <strong>{gramsPerMeter} g/m</strong>
                                    </Alert>


                                    {(() => {
                                        const indicator = getIndicator(weight, aftmInfo);
                                        return (
                                            <div className="text-center mb-3">
                                                <Badge bg={indicator.color} pill className="px-3 py-2 fs-5">
                                                    {indicator.text}
                                                </Badge>
                                            </div>
                                        );
                                    })()}
                                </>
                            )}



                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
