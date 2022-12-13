import styled from "styled-components"

export default function Header() {
    return (
        <Topo>
            CINEFLEX
        </Topo>
    )
}

const Topo = styled.div`
width: 100%;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
font-size: 34px;
font-weight: 400;
line-height: 40px;
background-color: #C3CFD9;
color: #E8833A;
position: fixed;
top: 0;
`