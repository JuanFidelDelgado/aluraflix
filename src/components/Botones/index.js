import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 180px;
    height: 54px;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 10px;
`

const BtnHeader = styled.a`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 21px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.buttonText};
`

const Boton = (props) => {
    /*
        const [mostrar, setMostrar] = useState(true);
        const manejarClick = () => {
            console.log("Mostrar / Ocultar", mostrar);
            setMostrar(mostrar);
        }
        */
    return (
        <Button onClick={props.cambiarMostrar}>
            <BtnHeader>
                {props.texto}
            </BtnHeader>
        </Button>
    )
}

export default Boton;