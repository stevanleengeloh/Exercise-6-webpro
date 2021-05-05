import React from 'react'
import * as b from 'react-bootstrap'

const Inputs = ({inputTitle, placeholder, value, onChange}) => {
    return (
        <b.Form.Group>
        <b.Form.Label>{inputTitle}</b.Form.Label>
        <br/>
        <b.Form.Control placeholder={placeholder} value={value} onChange={onChange}/>
      </b.Form.Group>
    )
}

export default Inputs