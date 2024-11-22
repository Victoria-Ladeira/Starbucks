import {H1, H2, Main, P, Span, Img, Div, Section, Imagem} from "./Style"
import {Button} from "../ButtonStyle"
import {useState} from "react"
import copoAmarelo from "../../assets/amarelo2.svg"
import copoLaranja from "../../assets/laranja2.svg"
import copoVermelho from "../../assets/vermelho2.svg"

export default function Home () {
    
    const [copo, setCopo,] = useState (copoLaranja);
    
    const trocarCopoLaranja = () => {
    setCopo(copoLaranja);
    }

    const trocarCopoVermelho = () => {
        setCopo(copoVermelho);
    }

    const trocarCopoAmarelo = () => {
        setCopo(copoAmarelo);
    }
 
    return(
        <Main>
            <section>
            <H2>Mais que Café</H2>
            <H1>Isso  é <Span>Starbucks</Span></H1>
            <P>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</P>
            <Button>SAIBA MAIS</Button>
            <Div>
            <Imagem onClick={trocarCopoLaranja} src="src\assets\laranja1.svg" alt="Copo de café" />
            <Imagem onClick={trocarCopoVermelho} src="src\assets\vermelho1.svg" alt="Copo de café" />
            <Imagem onClick={trocarCopoAmarelo} src="src\assets\amarelo1.svg" alt="Copo de café" />
            </Div>
            </section>
            <Section>
                <Div className="forma"></Div>
                <Img src={copo} alt="copo de café grande" />
            </Section>
        </Main>
    );
}