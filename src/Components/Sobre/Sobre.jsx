import {Button} from "../ButtonStyle"
import {Section, Div, Img, H2, H3, P} from "./Style"
import Loja from "../../assets/preto.svg"

export default function Sobre() {
    return(
        <Section>
            <div>
                <Img src={Loja} alt="Loja Starbucks" />
            </div>
            <Div>
            <H2>PREPARAÇÃO</H2>
            <H3>Níveis de torra</H3>
            <P>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</P>
            <Button>SAIBA MAIS</Button>
            </Div>
        </Section>
    );
}