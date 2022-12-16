import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Sucesso({sucesso}) {
    const {hora, dia, tituloFilme, ingresso, nome, cpf} = sucesso

    return (
        <Pagina>
            <Titulo>Pedido feito <br /> com sucesso!</Titulo>

            <ContainerTexto>
                <strong><p>Filme e sessão:</p></strong>
                <p>{tituloFilme}</p>
                <p>{dia} - {hora}</p>
            </ContainerTexto>

            <ContainerTexto>
                <strong><p>Ingressos:</p></strong>
                {ingresso.map(i => <p key={i}>Assento {i}</p>)}
            </ContainerTexto>

            <ContainerTexto>
                <strong><p>Comprador:</p></strong>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
            </ContainerTexto>

            <Container>
                <Link to="/">
                    <button>Voltar para Home</button>
                </Link>
            </Container>

        </Pagina>
    )

}

const Pagina = styled.div`
width: 100%;
margin-top: 107px;
// margin-left: 29px;
`

const Titulo = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
text-align: center;
color: #247A6B;
`

const ContainerTexto = styled.div`
// width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 30px;
margin-left: 29px;
font-family: Roboto;
font-size: 22px;
font-weight: 400;
line-height: 26px;
color: #293845;
strong {
    font-weight: bold;
    margin-bottom: 5px;
}
`

const Container = styled.div`
display: flex;
justify-content: center;`