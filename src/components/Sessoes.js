import axios from 'axios'
import Header from './Header'
import Filmes from './Filmes'
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import HoraSessao from './HoraSessao';
import Footer from './Footer';


export default function Sessoes() {

    const [sessao, setSessao] = useState(undefined)
    const { idFilme } = useParams();

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

		requisicao.then((resposta) => {
            setSessao(resposta.data)
        })


        requisicao.catch((erro) => console.log(erro.data))

	}, []);

    if (sessao === undefined) {
        return <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
    }


    return (
        <>
            <Titulo>Selecione o Horário</Titulo>
            <Container>
            {
                sessao.days.map((session) => {
                    return (
                        <>
                        <Sessao dia={session.date} weekday={session.weekday} />
                        <HoraSessao key={session.id} horario={session}/>
                        </>
                    )
                })
            }
            </Container>
            <Footer tituloFilme={sessao.title} poster={sessao.posterURL}/>
        </>
    )
}


function Sessao(props) {
    return (
            <H1>{props.weekday} - {props.dia}</H1>
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
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-left: 23px;
margin-bottom: 140px;
`

const H1 = styled.h1`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
text-align: left;
color: #293845;
`