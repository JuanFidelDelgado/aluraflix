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

const FormularioVideo = (props) => {
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

    return <StyledSection className="formulario">
        <StyledForm onSubmit={manejarEnvio}>
            <StyledH2>Nuevo vídeo</StyledH2>
            <Campo
                label="Título"
                placeholder="Ingresar título"
                required={true}
                valor={titulo}
                setValor={setTitulo}
            />
            <Campo
                label="Link"
                placeholder="Link del vídeo"
                required
                valor={link}
                setValor={setLink}
            />
            <Campo
                label="Imagen"
                placeholder="Link imagen del vídeo"
                required
                valor={imagen}
                setValor={setImagen}
            />
            <ListaOpciones
                valor={categoriaVideo}
                setEquipo={setCategoriaVideo}
                equipos={props.equipos}
            />
            <BotonCrear texto="Guardar vídeo" />
        </StyledForm>
    </StyledSection>
};

export default FormularioVideo;