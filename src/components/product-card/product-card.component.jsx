import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

import { ProductCardContainer, Footer } from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES} from "../button/button.component";

const ProductCard = ({ product }) => {
const { name, price, imageUrl } = product;
const cartItems = useSelector(selectCartItems);
const dispatch = useDispatch();

const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

return (
  <ProductCardContainer>
    <img src={imageUrl} alt={`${name}`} />
    <Footer>
      <span className="name">{name}</span>
      <span className="price">£{price}</span>
    </Footer>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} > Add to cart</Button>
  </ProductCardContainer>
)};

export default ProductCard;
