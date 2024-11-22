import styled from "styled-components"

export const Main = styled.main`
margin: 0px 80px;
display: flex;
`
export const H2 = styled.h2 `
font-family: "Inter", sans-serif;
color: rgba(0, 0, 0, 0.8);
font-size: 65px;
font-weight: 300;
`
export const H1 =styled.h1 `
font-family: "Poppins", sans-serif;
color: rgba(0, 0, 0, 1);
font-size: 59px;
font-weight: 400;
`
export const Span = styled.span `
color:rgba(3, 113, 67, 1);
font-weight: 700;
font-size: 80px;
`
export const P = styled.p `
width: 45vw;
font-size: 22px;
font-family: "Poppins", sans-serif;
`
export const Div = styled.div`
margin-top: 25px;
margin-left: 380px;
width: 22vw;
display: flex;
justify-content: space-between;

&.forma{
    background-color: rgba(3, 113, 67, 1);
    height: 120vh;
    width: 60vw;
    border-radius: 50%;
    position: absolute;
    right: -300px;
    top: 165px;
}
`
export const Imagem = styled.img`
width: 100%;

&:hover{
    transform: rotate(16deg);
}
`
export const Img = styled.img`
top: 123px;
left: 90px;
height: 460px;
position: absolute;
`
export const Section = styled.section`
    display: flex;
    height: 81vh;
    width: 330vw;
    position: relative;
    overflow: hidden;
`
