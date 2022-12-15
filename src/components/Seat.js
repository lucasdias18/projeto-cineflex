import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Seat({cadeira}) {
    const {seats} = cadeira

    return (
        <Caixa>
            {
                seats.map((a) => {
                    return (
                        <Link key={a.id} to={`/sucesso`}>
                            <Botao>{a.name}</Botao>
                        </Link>
                    )
                })
            }
        </Caixa>
    )
}

const Botao = styled.button`
`

const Caixa = styled.div`
`
