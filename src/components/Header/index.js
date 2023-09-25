import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import { categoria1, colorPrimario, gris0, negro100, negro75 } from "../Ui/variables"

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

const Button = styled.button`
    width: 180px;
    height: 54px;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
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
const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo} alt="Logo" />
            <Button>
                <BtnHeader primario={"valor"} href="https://google.com">
                    Nuevo vídeo
                </BtnHeader>
            </Button>
        </StyledHeader>
    );
};

export default Header;
