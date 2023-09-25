import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    margin: 24px 0;
    font-family: 'Roboto', sans-serif;
`

const StyledLabel = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.texto};
`

const StyledInput = styled.input`
    width: 100%;
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 30px 20px;
    font-size: 16px;
    font-weight: 400;
    outline-color: #6278F7;
    box-sizing: border-box;
`
/*
    .campo - color input {
        height: 40px;
padding: 5px 20px;
}
*/

const Campo = (props) => {

    //Destructuración
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }

    return (
        <StyledDiv>
            <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>
            <StyledInput
                id={props.label}
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </StyledDiv>
    )
}

export default Campo;