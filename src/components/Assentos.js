import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Seat from "./Seat";

export default function Assentos({setSucesso}) {
    const [assento, setAssento] = useState(undefined)
    const {idSessao} = useParams()
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [selecionado, setSelecionado] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then((resposta) => setAssento(resposta.data))
        requisicao.catch((erro) => console.log(erro.data))
    }, []);

    function escolhaAssento(cadeira) {
        const selecao = selecionado.some((s) => s.id === cadeira.id)

        if (selecao) {
            const novoSelecionados = selecionado.filter((s) => s.id !== cadeira.id)
            setSelecionado(novoSelecionados)
        } else {
            setSelecionado([...selecionado, cadeira])
        }
    }

    function comprarIngressos(e) {
        e.preventDefault()
        const escolhidos = selecionado.map(seat => seat.id)
        const dados = {ids: escolhidos, name: nome, cpf: cpf}

        if (escolhidos.length === 0) {
            alert("Selecione pelo menos um assento")
        }
        else {
            const selected = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', dados)
            selected.then(resp => {
                                    setSucesso({
                                        hora: assento.name,
                                        dia: assento.day.date,
                                        tituloFilme: assento.movie.title,
                                        ingresso: selecionado.map(seat => seat.name),
                                        nome: nome,
                                        cpf: cpf
                                    })
                navigate("/sucesso")
            })

            selected.catch((erro) => (erro.data))
        }
    }

    if (assento === undefined) {
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
    }

    return (
        <>
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <ContainerAssento>
            {
                assento?.seats.map((sea) => {
                    return (
                        <Seat key={sea.id} cadeira={sea} escolhaAssento={escolhaAssento} selecao={selecionado.some((s) => s.id === sea.id)} />
                    )
                })
            }
            </ContainerAssento>

            <Legenda>
                <Circulo>
                    <Selecionado />
                    <p>Selecionado</p>
                </Circulo>
                <Circulo>
                    <Disponivel />
                    <p>Disponível</p>
                </Circulo>
                <Circulo>
                    <Indisponivel />
                    <p>Indisponível</p>
                </Circulo>
            </Legenda>

            <Form onSubmit={comprarIngressos}>
                <label htmlFor="nome">Nome do comprador:</label>
                <input id='nome' placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} required />
                <label htmlFor="CPF">CPF do comprador:</label>
                <input id="cpf" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCPF(e.target.value)} required />
                <button type="submit">Reservar Assento(s)</button>
            </Form>

            <Footer tituloFilme={assento?.movie.title} poster={assento?.movie.posterURL} weekday={assento?.day.weekday} hora={assento?.name} />
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
align-items: center;
gap: 7%;
flex-wrap: wrap;
margin-top: 30px;
`

const Circulo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;
`

const Selecionado = styled.div`
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid #0E7D71;
background-color: #1AAE9E;
`

const Disponivel = styled.div`
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
width: 87%;
display: flex;
flex-direction: column;
gap: 3px;
margin-top: 40px;
margin-bottom: 140px;
margin-left: auto;
margin-right: auto;
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
color: #293845;
`