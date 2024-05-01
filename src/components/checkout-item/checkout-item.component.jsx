import { Quantity, CheckoutItemContainer, ImageContainer, RemoveButton } from './checkout-item.styles';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();


    const addItem = () => dispatch(addItemToCart(cartItems, item));

    const removeItem = () => dispatch(removeItemFromCart(cartItems, item));

    const removeProduct = () => dispatch(clearItemFromCart(cartItems, item));

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