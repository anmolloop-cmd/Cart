import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return <CartItem
                    product={product}
                    key={product.id}
                    IncreaseQuantity={props.IncreaseQuantity}
                    DecreaseQuantity={props.DecreaseQuantity}
                    DeleteQuantity={props.DeleteQuantity} />
            })}
        </div>
    );
}
export default Cart;
