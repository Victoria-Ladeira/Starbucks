import { Link } from "react-router-dom";
import { HeaderStyle, StyleLink, Ul, Img } from "./Style";

export default function Header() {
    return(
        <HeaderStyle>
           <Img src="../../src/assets/logo.svg" alt="logomarca" />
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