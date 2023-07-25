import { ICoffe, TagCoffee } from "../../interfaces/ICoffee";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

const coffees : ICoffe[] = [
    { 
        id : 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: [ TagCoffee.Tradicional ],
        amount: 1,
        imgSource: ''
    }
]


export function Home() {
    return (
        <HomeContainer>
            <Intro />

            <div>
                {coffees.map(coffe => {
                    return (
                        <div key={coffe.id}> {coffe.name} </div>
                    )
                })}
            </div>

        </HomeContainer>
    )
}