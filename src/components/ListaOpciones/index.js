import React from "react";
import styled from "styled-components";
import { colorPrimario } from "../Ui/variables";

const StyledDiv = styled.div`
    font-family: 'Roboto', sans-serif;
`

const StyledLabel = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`

const StyledSelect = styled.select`
    width: 100%;
    background: #ffffff;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    padding: 30px 20px;
    outline-color: ${colorPrimario};
    border: none;
    font-size: 16px;
    font-weight: 400;
`

const ListaOpciones = (props) => {

    const categorias = [
        "Back End",
        "Mobile",
        "Structure",
        "Data Science",
        "Design & UX",
        "Digital Marketing",
        "Innovation & Management"
    ]

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value);
    }

    return <StyledDiv>
        <StyledLabel htmlFor="categorias">Categorias</StyledLabel>
        <StyledSelect id="categorias" value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
            {categorias.map((categoria, index) => {
                return <option key={index}>{categoria}</option>
            })}
            {/*
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        */}
        </StyledSelect>
    </StyledDiv >
}

export default ListaOpciones;