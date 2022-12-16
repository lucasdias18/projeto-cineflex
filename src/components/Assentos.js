import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Seat from "./Seat";
// import { selecionado } from "./Seat";

export default function Assentos() {
    const [assento, setAssento] = useState(undefined)
    const {idSessao} = useParams()
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [selecionado, setSelecionado] = useState([])

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then((resposta) => setAssento(resposta.data))
        requisicao.catch((erro) => console.log(erro.data))
    }, []);

    // function comprarIngressos(e) {
    //     e.preventDefault()
    //     const select = 
    // }

    if (assento === undefined) {
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
    }

    return (
        <>
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <ContainerAssento>
            {
                assento.seats.map((sea) => {
                    return (
                        <Seat key={sea.id} cadeira={sea}/>
                    )
                })
            }
            </ContainerAssento>

            <Legenda>
                <Circulo>
                    <Selecionado />
                    Selecionado
                </Circulo>
                <Circulo>
                    <Disponivel />
                    Disponível
                </Circulo>
                <Circulo>
                    <Indisponivel />
                    Indisponível
                </Circulo>
            </Legenda>

            {/* <Form onSubmit={comprarIngressos}>
                <label htmlFor="nome">Nome do comprador:</label>
                <input id='nome' value={nome} onChange={e => setNome(e.target.value)} required />
                <label htmlFor="CPF">CPF do comprador:</label>
                <input id="cpf" value={cpf} onChange={e => setCPF(e.target.value)} required />
                <button type="submit">Reservar Assento(s)</button>
            </Form> */}
        </>
    )
}


const Titulo = styled.h1`
font-family: Roboto;
font-size: 24px;
font-weight: 400;
line-height: 28px;
text-align: center;
color: #293845;
margin-top: 107px;
margin-bottom: 30px;
`

const ContainerAssento = styled.div`
padding: 0 31px;
display: flex;
flex-wrap: wrap;
row-gap: 18px;
column-gap: 7px;
`
const Legenda = styled.div`
display: flex;
justify-content: center;
gap: 7%;
flex-wrap: wrap;
margin-top: 16px;
// padding: 0 20%;
`

const Circulo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;
`

const Selecionado = styled.button`
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid #0E7D71;
background-color: #1AAE9E;
`

const Disponivel = styled.button`
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid #7B8B99;
background-color: #C3CFD9;
`

const Indisponivel = styled.div`
height: 26px;
width: 26px;
border-radius: 12px;
background-color: #FBE192;
border: 1px solid #F7C52B;
`

const Form = styled.form`
`