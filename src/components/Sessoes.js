import axios from 'axios'
import Header from './Header'
import Filmes from './Filmes'
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const [horario, setHorario] = useState(undefined)

export default function Sessoes() {

    const [sessao, setSessao] = useState(undefined)
    // const [horario, setHorario] = useState(undefined)

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`);

		requisicao.then((resposta) => setSessao(resposta.data.days))
        // requisicao.then(resposta)
        requisicao.catch((erro) => console.log(erro.data))

        // function resposta(resp) {
        //     setSessao(resp.data.days)
        //     function answer(sessao) {
        //         setHorario(sessao.showtimes)
        //         console.log(horario)
        //     }
        //     // console.log(horario)
        // }
        // setHorario(sessao.showtimes)

	}, []);

    if (sessao === undefined) {
        return <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
    }

    return (
        <>
            <Header></Header>
            <Titulo>Selecione o Horário</Titulo>

            {
                sessao.map((session) => {
                    return (
                        <Sessao hora={session.showtimes.map((nome) => nome.name)} dia={session.date} weekday={session.weekday} />
                    )
                })
            }

            {/* <Container>
                {
                    sessao.map((session) => {
                        return (
                            <Sessao dia={session.date} weekday={session.weekday} />
                        )
                    })
                    // horario.map((hour) => return <Hora hora={hour.name} id={hour.id})
                }
                {
                    horario.map((hour) => {
                        return (
                            <Hora hora={hour.name} id={hour.id} />
                        )
                    })
                }

            </Container> */}
        </>
    )
}

// hora1={session.showtimes.map((nome) => nome.name)} hora2={session.showtimes.map((nome) => nome.name)}

// horario.map((hour) => {
//     return (
//         <Hora hora={hour.name} />
//     )
// })
// }

function Sessao(props) {
    return (
        <Container>
            <H1>{props.weekday} - {props.dia}</H1>
            <Link key={props.hora} to={`/sessoes/${props.id}`}>
                <Botao>{props.hora}</Botao>
            </Link>
        </Container>
    )
}

// function Sessao(props) {
//     return (
//             <H1>{props.weekday} - {props.dia}</H1>
//     )
// }

// function Hora(props) {
//     return (
//         <Link key={props.hora} to={`/sessoes/${props.id}`}>
//             <Botao>{props.hora}</Botao>
//         </Link>
//     )
// }

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
`

const H1 = styled.h1`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
text-align: left;
color: #293845
`

const Botao = styled.button `
height: 43px;
width: 83px;
border-radius: 3px;
background-color: #E8833A;
border: hidden;
`