import Header from './Header'
import Filmes from './Filmes'
import styled from 'styled-components'

export default function InitialScreen() {
    return (
    <>
    <Header></Header>
    <Container>
        <Filmes></Filmes>
    </Container>
    </>
    )
}

const Container = styled.div`
margin-top: 67px;`