import { Link } from "react-router-dom"
import { HeaderStyle, StyleLink, Ul, Img } from "./Style"
import Logo from "../../assets/logo.svg"

export default function Header() {
    return(
        <HeaderStyle>
           <Img src={Logo} alt="logomarca" />
           <nav>
            <Ul>
                <li>
                    <StyleLink to="/">Home</StyleLink>
                </li>
                <li>
                    <StyleLink to="/novidades">Novidades</StyleLink>
                </li>
                <li>
                    <StyleLink to="/sobre">Sobre</StyleLink>
                </li>
            </Ul>
           </nav>
        </HeaderStyle>
    );
}