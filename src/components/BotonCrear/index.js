import styled from "styled-components";

const StyledButton = styled.button`
    width: 170px;
    height: 80px;
    border-radius: 10px;
    background: rgba(98, 120, 247, 1);
    border: none;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    margin: 24px 0;

    &:hover {
        color: ${({ theme }) => theme.body};
    }
`

const BotonCrear = (props) => {
    return <StyledButton>{props.texto}</StyledButton>
}

export default BotonCrear;