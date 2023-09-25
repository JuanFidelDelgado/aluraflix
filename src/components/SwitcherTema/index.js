import React from "react";
import daymode from "../../assets/images/daymode.svg";
import nightmode from "../../assets/images/nightmode.svg";
import { Icono } from "../Ui";

const SwitcherTema = ({ tema }) => {
    const temaClaro = <Icono src={daymode} alt="Tema Claro" />
    const temaOscuro = <Icono src={nightmode} alt="Tema Oscuro" />

    return <>{tema ? temaOscuro : temaClaro}</>
}

export default SwitcherTema;