import { HeaderContainer, Location, Nav } from "./styles"
import { NavLink } from 'react-router-dom'

import logoCoffeeDeliveryImg from "../../assets/logo.svg"
import mapPinImg from "../../assets/map-pin.svg"
import cartImg from "../../assets/cart.svg"

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logoCoffeeDeliveryImg}></img>
            </NavLink>

            <Nav quantitycart={3}>
                <Location>
                    <img src={mapPinImg} />
                    Porto Alegre, RS
                </Location>
                <NavLink to="/checkout" title="Concluir pedido">
                    <img src={cartImg} />
                </NavLink>
            </Nav>
        </HeaderContainer>
    )
}