import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductContainer,
  ProductCard,
  ProductList,
  ProductImage,
  ProductInfoContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductPrice,
  ProductSinglePrice,
  ProductQuantity,
  TotalContainer,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  CartButton,
  CartButtonText,
  PriceContainer,
  SubTotalValue,
} from './styles';

import { useCart } from '../../hooks/cart';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { products, increment, decrement, addToCart } = useCart();
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }: { item: Product }) => (
            <ProductCard>
              <ProductImage
                resizeMode="contain"
                source={{ uri: item.image_url }}
              />

              <ProductInfoContainer>
                <ProductTitle>{item.title}</ProductTitle>

                <ProductPriceContainer>
                  <ProductSinglePrice>{item.price}</ProductSinglePrice>

                  <TotalContainer>
                    <ProductQuantity>{`${item.quantity} X`}</ProductQuantity>
                    <ProductPrice>{item.quantity * item.price}</ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductInfoContainer>

              <ActionContainer>
                <ActionButton onPress={() => {}}>
                  <FeatherIcon name="plus" color="#E83F5B" size={18} />
                </ActionButton>

                <ActionButton onPress={() => {}}>
                  <FeatherIcon name="minus" color="#E83F5B" size={18} />
                </ActionButton>
              </ActionContainer>
            </ProductCard>
          )}
        />
      </ProductContainer>

      <TotalProductsContainer>
        <CartButton>
          <FeatherIcon name="shopping-cart" size={20} color="#FFF" />
          <CartButtonText>0 items</CartButtonText>
        </CartButton>

        <SubTotalValue>R$ 5500</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
