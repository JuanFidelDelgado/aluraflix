import React, { useState } from "react";
import styled from "styled-components";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import BotonCrear from "../BotonCrear";

const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 0 50px;
    flex-wrap: wrap;
    gap: 20px;
`
const StyledForm = styled.form`
    flex: 1;
    background: ${({ theme }) => theme.form};
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 30%);
    border-radius: 20px;
    margin: 20px 20px;
    padding: 8px 100px;
`

const StyledH2 = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: ${({ theme }) => theme.texto};
`

const FormularioCategoria = (props) => {
    const [titulo, setTitulo] = useState("");
    const [link, setLink] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoriaVideo, setCategoriaVideo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [color, setColor] = useState("");
    const { nuevoVideo, nuevaCategoria } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            titulo: titulo,
            link: link,
            imagen: imagen,
            categoriaVideo: categoriaVideo
        }
        nuevoVideo(datosAEnviar);
    }

    const manejarEquipo = (e) => {
        e.preventDefault();
        nuevaCategoria({ categoria, colorPrimario: color });
    }

    return <StyledSection>
        <StyledForm onSubmit={manejarEquipo}>
            <StyledH2>Crear categoría</StyledH2>
            <Campo
                label="Categoría"
                placeholder="Nombre categoría"
                required={true}
                valor={categoria}
                setValor={setCategoria}
            />
            <Campo
                label="Descripción"
                placeholder="Descripción del vídeo"
                required={true}
                valor={categoria}
                setValor={setCategoria}
            />
            <Campo
                label="Categoría"
                placeholder="Nombre categoría"
                required={true}
                valor={categoria}
                setValor={setCategoria}
            />
            <Campo
                label="Color"
                placeholder="Ingresar color"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <BotonCrear texto="Crear categoría" />
        </StyledForm>
    </StyledSection>
};

export default FormularioCategoria;