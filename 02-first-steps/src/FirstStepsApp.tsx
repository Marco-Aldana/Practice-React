import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart{
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] =[
    {productName: 'Nintendo', quantity:1},
    {productName: 'Play 5', quantity:3},
    {productName: 'Xbox one', quantity:5},
    {productName: 'Steam Deck', quantity:2},
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>
            {
                itemsInCart.map((item) => (<ItemCounter key={item.productName} name={item.productName} quantity={item.quantity}></ItemCounter>))
            }
        </>
    )
}
