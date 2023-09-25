import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import { categoria1, colorPrimario, gris0, negro100, negro75 } from "../Ui/variables"

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15vw;
    margin: 0 0 10px 0;
    width: 100%;
    height: 150px;
    align-items: center;
    background: ${({ theme }) => theme.footer};
    border-top: 5px solid ${colorPrimario};
`

const Logo = styled.img`
    height: 50px;
    width: 170px;
    top: 30px;
    left: 40px;
`

const Redes = styled.div`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    align-self: center;
    font-size: 200%;
    margin: 10px 0 0 0;
`

const Icono = styled.a`
    color: ${({ theme }) => theme.icono};
    margin-left: 25px;
    font-size: larger;
    text-decoration: none;
    transition: all 0.5s;

    &:hover {
    transform: scale(1.5);
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Logo src={logo} alt="Logo" />
            <Redes>
                <Icono href="https://github.com/JuanFidelDelgado" className="fa fa-github" target="_blank" title="Github" rel="noreferrer"></Icono>
                <Icono href="https://www.linkedin.com/in/juan-delgado-desarrollador/" className="fa fa-linkedin" target="_blank" title="Lilnkedin" rel="noreferrer"></Icono>
            </Redes>

        </StyledFooter>
    );
};

export default Footer;
