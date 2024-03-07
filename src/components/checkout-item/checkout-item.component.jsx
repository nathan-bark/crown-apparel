import { Quantity, CheckoutItemContainer, ImageContainer, RemoveButton } from './checkout-item.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item;

    const {removeProductFromCart, addItemToCart, removeItemFromCart,} = useContext(CartContext);

    const addItem = () => addItemToCart(item);

    const removeItem = () => removeItemFromCart(item);

    const removeProduct = () => removeProductFromCart(item);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <span className='name'>{name}</span>
            <Quantity>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
                </Quantity>
            <span className='price'>£{price}</span>
            <RemoveButton onClick={removeProduct}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    )

}

export default CheckoutItem;