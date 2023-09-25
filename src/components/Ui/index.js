import styled from "styled-components";

export const Icono = styled.img`
    height: 40px;
    width: 40px;
`

export const IconoTema = styled(Icono)`
    filter: ${({ theme }) => theme.filter};
`

export const Button = styled.button`
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    background-color: #41d3be;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: red;
    //background-color: ${({ theme }) => theme.inside};
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    margin: 0 20px 0 20px;
    width: 48%;

    @media (max-width: 800px) {
        width: 95%;
        margin: 5px;
    }
`

export const Saldo = styled.div`
    font-weight: 700;
    font-size: 32px;
`

export const Detalle = styled.span`
    color: #41d3be;
    font-size: 24px;
`

export const ButtonTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer;
`