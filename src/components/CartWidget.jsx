function CartWidget({ cantidad }) {
    return <>
        <div>
            <img src="https://www.iconpacks.net/icons/3/free-green-shopping-cart-icon-10909.png" alt="CarritoIcon" /> <h3> {cantidad}</h3>
        </div>
    </>;
}

export default CartWidget;