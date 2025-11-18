import React from "react";
import { Form } from "react-bootstrap";

const aftmClasses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function AFTMSelect({ value, onChange }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="fw-bold">AFTM-klass</Form.Label>
            <Form.Select
                size="lg"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            >
                <option value="">-- Välj klass --</option>
                {aftmClasses.map(n => (
                    <option key={n} value={n}>
                        Klass #{n}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
}

export default AFTMSelect;
