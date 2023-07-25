import { CoffeeCard } from "../../components/CoffeeCard";
import { ICoffe, TagCoffee } from "../../interfaces/ICoffee";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

const coffees : ICoffe[] = [
    { 
        id : 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: [ TagCoffee.Tradicional ],
        amount: 9.90,
        imgSource: 'expresso-tradicional.png'
    }
]


export function Home() {
    return (
        <HomeContainer>
            <Intro />

            <div>
                {coffees.map(coffe => {
                    return (
                        <CoffeeCard coffe={coffe} />
                    )
                })}
            </div>

        </HomeContainer>
    )
}