import {Section, Div, Img, H2, H3, P} from "./Style"
import Grao from "../../assets/grao.svg"
import {Button} from "../ButtonStyle"

export default function Novidades() {
    return(
            <Section>
            <Div>
            <H2>PREPARAÇÃO</H2>
            <H3>Níveis de torra</H3>
            <P>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</P>
            <Button>SAIBA MAIS</Button>
            </Div>
            <div>
                <Img src={Grao} alt="Grão de café" />
            </div>
        </Section>
    );
}