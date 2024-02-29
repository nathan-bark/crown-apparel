import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item;

    const {removeProductFromCart, addItemToCart, removeItemFromCart,} = useContext(CartContext);

    const addItem = () => addItemToCart(item);

    const removeItem = () => removeItemFromCart(item);

    const removeProduct = () => removeProductFromCart(item);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
                </span>
            <span className='price'>£{price}</span>
            <div className='remove-button' onClick={removeProduct}>&#10005;</div>

        </div>
    )

}

export default CheckoutItem;