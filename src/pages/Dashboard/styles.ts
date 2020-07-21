import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

interface Grid {
  columns: number;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const LayoutButtonsContainer = styled.View`
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;
  margin-right: 20px;
  width: 80px;
  border-radius: 8px;
`;

export const ProductContainer = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs((props: Grid) => ({
  numColumns: props.columns,
}))`
  flex: 1;
  padding: 0 10px;
`;

export const ProductCard = styled.View`
  padding: 16px 16px;
  flex: 1;
  margin: 8px;
  background: #fff;
  border-radius: 8px;
  elevation: 8;
`;

export const ProductImage = styled.Image`
  width: 122px;
  height: 122px;
  align-self: center;
`;

export const ProductTitle = styled.Text<Grid>`
  margin-top: 10px;
  font-size: ${(props: Grid) => (props.columns === 1 ? 18 : 14)}px;
  font-weight: 500;
  font-family: 'Roboto-Medium';
`;

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-size: ${(props: Grid) => (props.columns === 1 ? 18 : 16)}px;
  font-weight: 500;
  color: #e83f5b;
  font-family: 'Roboto-Regular';
`;

export const ProductButton = styled.TouchableOpacity<Grid>`
  min-height: ${(props: Grid) => (props.columns === 1 ? 40 : 0)}px;
  min-width: ${(props: Grid) => (props.columns === 1 ? 40 : 0)}px;
`;
