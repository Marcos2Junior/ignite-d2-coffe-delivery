import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
`

interface NavProps {
    quantitycart : number
}

export const Nav = styled.nav<NavProps>`
        display: flex;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;

        a {
            background: ${props => props.theme.yellowLight};
            padding: .5rem;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        a::after{
            content: '${props => props.quantitycart}';
            background: ${props => props.theme.yellowDark};
            position: absolute;
            top: -0.5rem;
            right: -0.5215625rem;
            width: 1.25rem;
            height: 1.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1000px;
            font-weight: bold;
            color: ${props => props.theme.white};
            font-size: 0.75rem;
        }
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    color: ${props => props.theme.purpleDark};
    font-size: 0.875rem;
    line-height: 1.1375rem;
    background: ${props => props.theme.purpleLight};
    border-radius: 6px;
`