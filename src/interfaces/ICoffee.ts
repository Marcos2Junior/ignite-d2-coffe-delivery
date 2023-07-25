export interface ICoffe {
    id: number,
    name: string,
    description: string,
    tags: TagCoffee[]
    imgSource: string,
    amount: number
}

export enum TagCoffee {
    Tradicional = 'TRADICIONAL',
    ComLeite = 'COM LEITE',
    Gelado = 'GELADO',
    Especial = 'ESPECIAL',
    Alcoolico = 'ALCOÓLICO'
}