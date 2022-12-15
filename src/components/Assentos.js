import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Seat from "./Seat";

export default function Assentos() {
    const {assento, setAssento} = useState(undefined)
    const {idSessao} = useParams()

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then((resposta) => setAssento(resposta.data))
        requisicao.catch((erro) => console.log(erro.data))
    }, []);

    if (assento === undefined) {
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
    }

    return (
        <>
            <Titulo>Selecione o(s) assento(s)</Titulo>
            {
                assento.map((sea) => {
                    return (
                        <Seat key={sea.id} cadeira={sea}/>
                    )
                })
            }
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
