import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import { useCart } from '../../hooks/cart';

import FloatingCart from '../../components/FloatingCart';
import formatValue from '../../utils/formatValue';

import {
  Container,
  ProductContainer,
  ProductList,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductPriceContainer,
  ProductButton,
  LayoutButtonsContainer,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [columns, setColumns] = useState(2);

  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const handleChangeColumns = useCallback(number => {
    setColumns(number === 1 ? 2 : 1);
  }, []);

  const handleAddToCart = useCallback(
    item => {
      addToCart(item);
    },
    [addToCart],
  );

  return (
    <Container>
      <LayoutButtonsContainer>
        <ProductButton
          onPress={() => {
            handleChangeColumns(1);
          }}
        >
          <Icon
            name="grid"
            size={30}
            color={columns === 2 ? '#E83F5B' : '#232129'}
            style={{ marginRight: 20 }}
          />
        </ProductButton>

        <ProductButton
          onPress={() => {
            handleChangeColumns(2);
          }}
        >
          <Icon
            name="layout"
            size={30}
            color={columns === 1 ? '#E83F5B' : '#232129'}
          />
        </ProductButton>
      </LayoutButtonsContainer>

      <ProductContainer>
        <ProductList
          contentContainerStyle={{ flexGrow: 1 }}
          data={products}
          columns={columns}
          key={columns}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 80 }}
          renderItem={({ item }) => (
            <ProductCard key={item.id}>
              <ProductImage
                resizeMode="contain"
                source={{ uri: item.image_url }}
              />

              <ProductTitle columns={columns}>{item.title}</ProductTitle>

              <ProductPriceContainer>
                <ProductPrice columns={columns}>
                  {formatValue(item.price)}
                </ProductPrice>

                <ProductButton
                  activeOpacity={0.8}
                  columns={columns}
                  onPress={() => {
                    handleAddToCart(item);
                  }}
                >
                  <Icon
                    name="plus"
                    size={columns === 1 ? 30 : 22}
                    color="#b8b8b8"
                  />
                </ProductButton>
              </ProductPriceContainer>
            </ProductCard>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
