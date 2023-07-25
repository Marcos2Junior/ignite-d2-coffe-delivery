import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IntroContainer, ItemList, List } from "./styles";
import introImg from '../../../../assets/intro.png'

export function Intro(){
    return (
        <IntroContainer>
        <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <List>
                <ItemList coloritem="yellowDark">
                    <div><ShoppingCart size={16} /></div>
                    Compra simples e segura
                </ItemList>
                <ItemList coloritem="baseText">
                    <div><Package size={16} /></div>
                    Embalagem mantém o café intacto
                </ItemList>
                <ItemList coloritem="yellow">
                    <div><Timer size={16} /></div>
                    Entrega rápida e rastreada
                </ItemList>
                <ItemList coloritem="purple">
                    <div>
                        <Coffee size={16} />
                    </div>
                    O café chega fresquinho até você
                </ItemList>
            </List>
        </section>
        <img src={introImg} />
    </IntroContainer>
    )
}