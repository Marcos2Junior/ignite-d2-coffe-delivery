import { HomeContainer, IntroContainer, List, ItemList } from "./styles";

import introImg from '../../assets/intro.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
export function Home() {
    return (
        <HomeContainer>
            <IntroContainer>
                <section>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <List>
                        <ItemList colorItem="yellowDark">
                            <div><ShoppingCart size={16} /></div>
                            Compra simples e segura
                        </ItemList>
                        <ItemList colorItem="baseText">
                            <div><Package size={16} /></div>
                            Embalagem mantém o café intacto
                        </ItemList>
                        <ItemList colorItem="yellow">
                            <div><Timer size={16} /></div>
                            Entrega rápida e rastreada
                        </ItemList>
                        <ItemList colorItem="purple">
                            <div>
                                <Coffee size={16} />
                            </div>
                            O café chega fresquinho até você
                        </ItemList>
                    </List>
                </section>
                <img src={introImg} />
            </IntroContainer>
        </HomeContainer>
    )
}