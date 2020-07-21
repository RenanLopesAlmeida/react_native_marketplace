import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProductContainer = styled.View`
  margin-top: 20px;
  border-radius: 5px;
  flex: 1;
  flex-direction: row;
`;

export const InfoNoItems = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: #232129;
  font-weight: 500;
  margin: 10px;
  font-family: 'Roboto-Regular';
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
  elevation: 1;
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
  font-family: 'Roboto-Medium';
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 14px;
  color: #a0a0b3;
  margin-top: 8px;
  font-family: 'Roboto-Regular';
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const ProductQuantity = styled.Text`
  color: #e83f5b;
  font-size: 16px;
  margin-right: 5px;
  font-family: 'Roboto-Regular';
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #e83f5b;
  font-weight: 500;
  font-family: 'Roboto-Regular';
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
