import styled from "styled-components/native";

export const Title = styled.Text`
margin-top: ${props => props.second ? "30px" : "0px"};
  font-size: 24px;
  color: #1f2b36;
  font-weight: 500;
  margin-bottom: 30px
`;
export const Text = styled.Text`
  font-size: 18px;
  color: #1f2b36;
  font-weight: 100;
  text-align: center
  margin-bottom: 15px
`;