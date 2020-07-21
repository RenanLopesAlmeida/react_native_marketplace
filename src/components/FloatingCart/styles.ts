import styled from 'styled-components/native';

export const Container = styled.View`
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
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto-Medium';
  margin-left: 16px;
`;

export const PriceContainer = styled.View`
  margin-right: 10px;
`;

export const PriceText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto-Medium';
`;
