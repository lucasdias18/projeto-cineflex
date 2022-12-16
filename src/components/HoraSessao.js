import { Link } from "react-router-dom";
import styled from "styled-components";


export default function HoraSessao({horario}) {
    const {showtimes} = horario

    return (
        <Caixa>
            {
                showtimes.map((h) => {
                    return (
                        <Link key={h.id} to={`/assentos/${h.id}`}>
                            <Botao>{h.name}</Botao>
                        </Link>
                    )
                })
            }
        </Caixa>
    )
}

const Botao = styled.button `
height: 43px;
width: 83px;
border-radius: 3px;
background-color: #E8833A;
border: hidden;
`

const Caixa = styled.div`
display: flex;
column-gap: 8px;
`