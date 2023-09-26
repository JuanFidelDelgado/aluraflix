import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from './components/Ui/temas';
import { ButtonTema } from './components/Ui';
import SwitcherTema from './components/SwitcherTema';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioVideo from './components/FormularioVideo';
import FormularioCategoria from './components/FormularioCategoria';
import Boton from './components/Botones';

function App() {

  //Estado y función para mostrar el formulario de nuevo vídeo
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const mostrarFormularioVideo = () => {
    setMostrarVideo(!mostrarVideo);
  }

  //Estado y función para mostrar el formulario de nueva categoría
  const [mostrarCategoria, setMostrarCategoria] = useState(false);
  const mostrarFormularioCategoria = () => {
    setMostrarCategoria(!mostrarCategoria);
  }

  //Styled component del cuerpo de la página
  const StyledBody = styled.div`
  background: ${({ theme }) => theme.body};
  `

  const StyledContenedor = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `

  //Estado y función para cambiar el tema de la página
  const [tema, setTema] = useState(true);
  const toogleTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <Router>
      <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
        <ButtonTema onClick={toogleTema}>
          <SwitcherTema tema={tema} />
        </ButtonTema>
        <GlobalStyle />
        <Header />
        <StyledBody>
          <StyledContenedor>
            <Boton texto="Nuevo vídeo" cambiarMostrar={mostrarFormularioVideo} />
            <Boton texto="Nuevo categoría" cambiarMostrar={mostrarFormularioCategoria} />
          </StyledContenedor>
          {mostrarVideo ? <FormularioVideo /> : <></>}
          {mostrarCategoria ? <FormularioCategoria /> : <></>}
          <Routes>
            <Route />
          </Routes>
        </StyledBody>
        <Footer />
      </ThemeProvider>
    </Router>

  );
}

export default App;
