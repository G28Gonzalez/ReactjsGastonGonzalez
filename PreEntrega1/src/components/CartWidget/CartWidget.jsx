import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
const CartWidget = () => {
    return (<>
        <div className='cart-carrito'>
            <ShoppingCartIcon className='icon-cart'/> <span style={{ color: "black" }}>Carrito (0)</span>
        </div>
    </>);
}

export default CartWidget;