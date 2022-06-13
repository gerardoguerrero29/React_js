function CartWidget({ cantidad }) {
    return <>
        <div className="carrito">
        <h3> {cantidad}</h3> <img src="https://www.iconpacks.net/icons/3/free-green-shopping-cart-icon-10909.png" alt="CarritoIcon" /> 
        </div>
    </>;
}

export default CartWidget;