import styled from "styled-components";

export default function Footer({poster, tituloFilme, weekday, hora})  {
    return (
        <Container>
            <ContainerImagem>
                <Poster src={poster} />
            </ContainerImagem>
            <ContainerTitulo>
                <p>{tituloFilme}</p>
                {weekday && hora && <p>{weekday} - {hora}</p>}
            </ContainerTitulo>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 120px;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
align-items: center;
font-size: 20px;
position: fixed;
bottom: 0;
`
const ContainerTitulo = styled.div`
font-family: Roboto;
font-size: 26px;
font-weight: 400;
line-height: 30px;
color: #293845;
`

const ContainerImagem = styled.div`
margin: 12px;
display: flex;
align-items: center;
justify-content: center;background-color: #FFFFFF;
border-radius: 3px;
box-shadow: 0px 2px 4px 2px #0000001A;
`

const Poster = styled.img`
width: 50px;
height: 70px;
padding: 8px;
`