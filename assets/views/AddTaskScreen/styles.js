import styled from "styled-components/native";
import { StyleSheet} from "react-native";

export const Middle = styled.View`
  display: flex
  flex-direction: row
`;
export const Start = styled.View`
  position:relative;
  width: 48%;
  margin-right: 2%;
`;
export const End = styled.View`
position:relative;
  width: 48%;
  margin-left: 2%;
`;
export const View = styled.View`
position:relative;
`;
export const styles = StyleSheet.create({
  SelectDropdownButton: {
    backgroundColor: "#F9F9F9",
    borderRadius: 5,
    height: 55,
    width: "100%",
    marginBottom: 16,
    marginTop: 8
  },
  SelectButtonText: {
    fontSize: 14,
    color: "#d2d2d2",
    fontWeight: "600",
    textAlign: "left"
  },
  SelectButtonTextSelected: {
    fontSize: 14,
    color: "#6b6b6b",
    fontWeight: "600",
    textAlign: "left"
  },
  SelectDropdown: {
    backgroundColor: "#f9f9f9",
    marginTop: 0,
    paddingTop: 0,
    borderRadius: 5,
  },
  SelectDropdownText: {
    fontSize: 14,
    color: "#6b6b6b",
    textAlign: "left"
  },
  Icon: {
    color: "#d2d2d2"
  },
  containerIcon:{
    position: "absolute",
    right: 12,
    top: "45%",
  },
  arrowContainerIcon:{
    width: 15,
    position: "absolute",
    right: 12,
    top: "45%",
    alignItems: "flex-end",
    transform: [{ rotate:"-90deg"}]
  },
})