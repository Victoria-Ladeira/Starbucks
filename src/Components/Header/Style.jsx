import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header `
display: flex;
justify-content: space-between;
padding: 15px 220px 15px 115px;
`
export const Img = styled.img`
height: 12vh;
`
export const StyleLink = styled(Link)`
text-decoration: none;
color: rgba(30, 57, 50, 1);
font-family: "Poppins", sans-serif;
font-size: 19px;

&:hover{
    color: #3cbf3c;
}
`
export const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
width: 25vw;
margin-top: 30px;
`
