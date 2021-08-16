import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
background: ${props => props.disabled ? "#d2d2d2" : "#51c06e"};
  border-radius: 20px;
  position: absolute;
  width: 100%;
  bottom: 18px;
  left:9%;
`;
export const TextButton = styled.Text`
  color: #FFFFFF;
  font-weight: 500;
  text-align: center;
  padding: 20px 0
  font-size: 14px;
`;
export const Text= styled.Text`
  color: #6b6b6b;
  font-size: 14px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#d2d2d2",
})`
  font-size: 14px;
  color: #6b6b6b;
  background-color: #F9F9F9;
  border-radius: 5px;
  height: 55px;
  padding: 0 5%;
  margin: 8px 0 16px;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #1f2b36;
  font-weight: 600;
`;

export const Screen = styled.View`
  padding: 5% 9%
  background-color: #ffffff;
  height:100%
`;
