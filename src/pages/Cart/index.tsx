import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';
import formatValue from '../../utils/formatValue';
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
  InfoNoItems,
  InfoText,
} from './styles';

import { useCart } from '../../hooks/cart';
import FloatingCart from '../../components/FloatingCart';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { products, increment, decrement } = useCart();

  return (
    <Container>
      <ProductContainer>
        {products.length === 0 && (
          <InfoNoItems>
            <FeatherIcon name="shopping-bag" size={45} color="#e83f5b" />
            <InfoText>There are no items in your shopping cart</InfoText>
          </InfoNoItems>
        )}
        {products.length > 0 && (
          <ProductList
            data={products}
            keyExtractor={item => item.id}
            key={products}
            extraData={products}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 120 }}
            renderItem={({ item }) => (
              <ProductCard>
                <ProductImage
                  resizeMode="contain"
                  source={{ uri: item.image_url }}
                />

                <ProductInfoContainer>
                  <ProductTitle>{item.title}</ProductTitle>

                  <ProductPriceContainer>
                    <ProductSinglePrice>
                      {formatValue(item.price)}
                    </ProductSinglePrice>

                    <TotalContainer>
                      <ProductQuantity>{`${item.quantity} X`}</ProductQuantity>
                      <ProductPrice>
                        {formatValue(item.quantity * item.price)}
                      </ProductPrice>
                    </TotalContainer>
                  </ProductPriceContainer>
                </ProductInfoContainer>

                <ActionContainer>
                  <ActionButton
                    onPress={() => {
                      increment(item.id);
                    }}
                  >
                    <FeatherIcon name="plus" color="#E83F5B" size={18} />
                  </ActionButton>

                  <ActionButton
                    onPress={() => {
                      decrement(item.id);
                    }}
                  >
                    <FeatherIcon name="minus" color="#E83F5B" size={18} />
                  </ActionButton>
                </ActionContainer>
              </ProductCard>
            )}
          />
        )}
      </ProductContainer>

      <FloatingCart />
    </Container>
  );
};

export default Cart;
