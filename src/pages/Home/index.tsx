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
                        <ItemList>
                            <ShoppingCart size={16} />
                            Compra simples e segura
                        </ItemList>
                        <ItemList>
                            <Package size={16} />
                            Embalagem mantém o café intacto
                        </ItemList>
                        <ItemList>
                            <Timer size={16} />
                            Entrega rápida e rastreada
                        </ItemList>
                        <ItemList>
                            <Coffee size={16} />
                            O café chega fresquinho até você
                        </ItemList>
                    </List>
                </section>
                <img src={introImg} />
            </IntroContainer>
        </HomeContainer>
    )
}