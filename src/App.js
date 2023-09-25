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
import Formulario from './components/Formulario';

function App() {

  const StyledBody = styled.div`
  background: ${({ theme }) => theme.body};
  `

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
          <Formulario />
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
