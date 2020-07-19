import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import Cart from '../../pages/Cart';

import {
  Container,
  CartButton,
  CartButtonText,
  PriceContainer,
  PriceText,
} from './styles';

const FloatingCart: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={20} color="#FFF" />
        <CartButtonText>0 items</CartButtonText>
      </CartButton>

      <PriceContainer>
        <PriceText>R$ 5.597</PriceText>
      </PriceContainer>
    </Container>
  );
};

export default FloatingCart;
