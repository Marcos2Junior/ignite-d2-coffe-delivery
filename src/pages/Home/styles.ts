import styled from "styled-components";

export const HomeContainer = styled.main`

`

export const IntroContainer = styled.div`
    display: flex;
    gap:3.5rem;
    justify-content: center;
    section {
        max-width: 36.75rem ;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 800;
        line-height: 3.9rem;
    }
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0 2.5rem;
`

interface ItemListProps {
    colorItem: string
}

export const ItemList = styled.li<ItemListProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 14.4375rem;
`