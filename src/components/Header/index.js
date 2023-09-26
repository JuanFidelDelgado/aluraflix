import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import { categoria1, colorPrimario, gris0, negro100, negro75 } from "../Ui/variables"
import Boton from "../Botones";

const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    height: 100px;
    background: ${({ theme }) => theme.header};
    border-bottom: 5px solid ${colorPrimario};
`

const Logo = styled.img`
    height: 50px;
    width: 170px;
    top: 30px;
    left: 40px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo} alt="Logo" />
        </StyledHeader>
    );
};

export default Header;
