import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = (props) => {
    return (
        <Alert variant="danger" style={{ fontSize: 20 }}>
            <strong>{props.error}</strong>
        </Alert>
    )
}

export default ErrorMessage
