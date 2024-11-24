import {H1, H2, Main, P, Span, Img, Div, Section, Imagem, Forma} from "./Style";
import {Button} from "../ButtonStyle"
import {useState} from "react"
import copoAmarelo from "../../assets/amarelo2.svg"
import copoLaranja from "../../assets/laranja2.svg"
import copoVermelho from "../../assets/vermelho2.svg"
import Laranja from "../../assets/laranja1.svg"
import Vermelho from "../../assets/vermelho1.svg"
import Amarelo from "../../assets/amarelo1.svg"
import ElipseVerde from "../../assets/EllipseVerde.png"
import ElipseVermelha from "../../assets/EllipseV.png"
import ElipseAmarela from "../../assets/EllipseA.png"

export default function Home () {
    
    const [copo, setCopo,] = useState (copoLaranja);
    const [elipse, setElipse] = useState (ElipseVerde);
    
    const trocarCopoLaranja = () => {
    setCopo(copoLaranja);
    setElipse(ElipseVerde);
    }

    const trocarCopoVermelho = () => {
        setCopo(copoVermelho) ;
        setElipse(ElipseVermelha);
    }

    const trocarCopoAmarelo = () => {
        setCopo(copoAmarelo);
        setElipse(ElipseAmarela);
    }

     return(
        <Main>
            <section>
            <H2>Mais que Café</H2>
            <H1>Isso  é <Span>Starbucks</Span></H1>
            <P>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</P>
            <Button>SAIBA MAIS</Button>
            <Div>
            <Imagem onClick={trocarCopoLaranja} src={Laranja} alt="Copo de café" />
            <Imagem onClick={trocarCopoVermelho} src={Vermelho} alt="Copo de café" />
            <Imagem onClick={trocarCopoAmarelo} src={Amarelo} alt="Copo de café" />
            </Div>
            </section>
            <Section>
                <Img src={copo} alt="copo de café grande" />
                <Forma src={elipse} alt="Elipse" />
            </Section>
        </Main>
    );
}