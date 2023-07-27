import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorSeat } from "./cores/cor";
import Assentos from "./Assentos";


export default function Seat({cadeira, escolhaAssento, selecao}) {
    const [status, setStatus] = useState('disponivel')

    useEffect(() => {
        if (selecao) {
            setStatus('selecionado')
        } else {
            setStatus('disponivel')
        }
    }, [selecao])

    
    
    if (cadeira.isAvailable === true){ 
        return (
                <Botao1 status={status} onClick={() => escolhaAssento(cadeira)}>
                    {cadeira.name}
                </Botao1>
        )
    }
    else {
        return <Botao2 onClick={() => alert('Assento indisponível!')}>{cadeira.name}</Botao2>
    }

}


const Botao1 = styled.div`
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid ${props => colorSeat[props.status].border};
background-color: ${props => colorSeat[props.status].background};
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
font-size: 11px;
font-weight: 400;
line-height: 13px;
color: #000000;
cursor: pointer;
`

const Botao2 = styled.div`
height: 26px;
width: 26px;
border-radius: 12px;
background-color: #FBE192;
border: 1px solid #F7C52B;
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
font-size: 11px;
font-weight: 400;
line-height: 13px;
color: #000000;
`

const Caixa = styled.div`
`
