import styled from "styled-components"

export const IntroContainer = styled.div`
    display: flex;
    gap:3.5rem;
    justify-content: center;
    align-items: flex-start;
    section {
        max-width: 36.75rem;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 800;
        line-height: 3.9rem;
    }

    p{
        margin-bottom: 4.125rem;
        font-size: 1.25rem;
        line-height: 1.625rem;
    }

    img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;
`



interface ItemListProps {
    coloritem: 'yellow' | 'yellowDark' | 'baseText' | 'purple'
}

export const ItemList = styled.li<ItemListProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 14.4375rem;
    color: ${prop => prop.theme.baseText};

    line-height: 1.8rem;
    
    div{
        background: ${prop => prop.theme[prop.coloritem]};
        border-radius: 1000px;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${prop => prop.theme.white};
        
    }
`