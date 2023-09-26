import styled from "styled-components";

export const Icono = styled.img`
    height: 40px;
    width: 40px;
`

export const IconoTema = styled(Icono)`
    filter: ${({ theme }) => theme.filter};
`

export const ButtonTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 20px;
    border: none;
    cursor: pointer;
    fill: red;

`