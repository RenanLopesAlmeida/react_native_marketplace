import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  margin-top: 60px;
  border-radius: 5px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 10px;
`;

export const ProductCard = styled.View`
  padding: 16px 10px;
  flex: 1;
  margin: 5px;
  background: #fff;
  border-radius: 8px;
  elevation: 8;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 122px;
  height: 122px;
  align-self: center;
`;

export const ProductInfoContainer = styled.View`
  margin-left: 16px;
`;

export const ProductTitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 12px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const ProductQuantity = styled.Text`
  color: #e83f5b;
  font-size: 16px;
  margin-right: 5px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #e83f5b;
  font-weight: bold;
`;

export const ActionContainer = styled.View`
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  padding: 12px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0;
  background: #e83f5b;
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CartButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background: transparent;
`;

export const CartButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 16px;
`;

export const PriceContainer = styled.View`
  margin-right: 10px;
`;

export const SubTotalValue = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
