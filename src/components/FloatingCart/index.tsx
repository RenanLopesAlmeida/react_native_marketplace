import React, { useMemo } from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import {
  Container,
  CartButton,
  CartButtonText,
  PriceContainer,
  PriceText,
} from './styles';

const FloatingCart: React.FC = () => {
  const navigation = useNavigation();

  const { products } = useCart();

  const cartSubtotal = useMemo(() => {
    const subTotal = products.reduce((accumulator, product) => {
      const total = product.price * product.quantity;
      return accumulator + total;
    }, 0);

    return subTotal;
  }, [products]);

  const totalItemsInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productQuantity = product.quantity;
      return accumulator + productQuantity;
    }, 0);

    return total;
  }, [products]);

  return (
    <Container>
      <CartButton
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Cart')}
      >
        <FeatherIcon name="shopping-cart" size={20} color="#FFF" />
        <CartButtonText>
          {`${totalItemsInCart}`}
          {totalItemsInCart === 1 ? ' item' : ' items'}
        </CartButtonText>
      </CartButton>

      <PriceContainer>
        <PriceText>{formatValue(cartSubtotal)}</PriceText>
      </PriceContainer>
    </Container>
  );
};

export default FloatingCart;
