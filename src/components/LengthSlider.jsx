import React from "react";
import { Form } from "react-bootstrap";

function LengthSlider({ value, onChange, min = 6, max = 14 }) {


    return (
        <Form.Group className="mb-3">
            <Form.Label>Klumpens längd: <strong>{value} m</strong></Form.Label>

            <Form.Range
                className="form-range-lg"
                min={min}
                max={max}
                step="0.1"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
        </Form.Group>
    );
}

export default LengthSlider;
