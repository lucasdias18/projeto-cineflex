import { Link } from "react-router-dom";
import styled from "styled-components";


export default function HoraSessao(props) {
    return (
        <Link key={props.hora} to={`/sessoes/${props.id}`}>
                <Botao>{props.hora}</Botao>
        </Link>
    )
}

const Botao = styled.button `
height: 43px;
width: 83px;
border-radius: 3px;
background-color: #E8833A;
border: hidden;
`