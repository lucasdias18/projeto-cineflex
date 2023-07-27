import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Filmes() {
	const [filmes, setFilmes] = useState(undefined);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			setFilmes(resposta.data);
		});
        requisicao.catch((erro) => console.log(erro.response.data))
	}, []);

        if (filmes === undefined) {
            return <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
        }

	return (
        <Conteudo>
            <Titulo>Selecione o filme</Titulo>
            <Container>
                {
                    filmes.map((movie) =>{
                        return (
                                <Filme imagem={movie.posterURL} title={movie.title} id={movie.id} />
                        )
                    })
                }
            </Container>
        </Conteudo>
	);
}

function Filme(props) {
    return (
        <Link key={props.title} to={`/sessoes/${props.id}`}>
            <Botao>
                <Img src={props.imagem} />
            </Botao>
        </Link>
    )
}

const Conteudo = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Titulo = styled.h1`
font-family: Roboto;
font-size: 24px;
font-weight: 400;
line-height: 28px;
text-align: center;
color: #293845;
margin-top: 30px;
margin-bottom: 30px;
`

const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
padding-left: 10%;
column-gap: 30px;
row-gap: 11px; 
`

const Botao = styled.button`
height: 209px;
width: 145px;
border-radius: 3px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border: hidden;
cursor: pointer;
`

const Img = styled.img `
height: 193px;
width: 129px;
border-radius: 0px;
`