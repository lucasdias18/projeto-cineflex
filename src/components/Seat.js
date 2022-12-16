import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorSeat } from "./cores/cor";

export var selecionado;

export default function Seat({cadeira, escolhaAssento}) {
    const [status, setStatus] = useState('disponivel')
    // var [selecionado, setSelecionado] = useState([])

    
    
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

    function escolhaAssento(cadeira) {
        var [selecionado, setSelecionado] = useState([])
        if (status === 'disponivel') {
            setStatus('selecionado')
            setSelecionado(selecionado.push(cadeira.id))
            console.log(selecionado)
        }
        else {
            setStatus('disponivel')
            // setSelecionado(selecionado.pop(cadeira.id))
        }
    }
}


const Botao1 = styled.button`
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid ${props => colorSeat[props.status].border};
background-color: ${props => colorSeat[props.status].background};
`

const Botao2 = styled.button`
height: 26px;
width: 26px;
border-radius: 12px;
background-color: #FBE192;
border: 1px solid #F7C52B;
`

const Caixa = styled.div`
`
