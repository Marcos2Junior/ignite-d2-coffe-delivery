import { ICoffe } from "../../interfaces/ICoffee";
import coffeImg from '../../assets/coffees/arabe.png'

interface ICoffeCardProps {
    coffe: ICoffe
}

export function CoffeeCard({ coffe }: ICoffeCardProps) {

    function getFullImgSrc(){
        return coffeImg.replace('arabe.png', coffe.imgSource)
    }

    return(
        <div key={coffe.id}> {coffe.name} 
            <img src={getFullImgSrc()} alt="" />
        </div>
    )
}