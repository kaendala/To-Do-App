import React, { useEffect, useState } from "react";
import { Button, Screen } from "../../styles/general";
import { TaskComponent, Text } from "./style";
import { changeTask } from "../../redux/actions/task.action";
import { View, SafeAreaView, Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";

const Task = ({ element, changeTask }) => {
  const [color, setColor] = useState();
  useEffect(() => {
    setColor(getRandomColor());
  }, []);
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <TaskComponent>
      <CheckBox
        checked={element.completed}
        checkedColor={color}
        uncheckedColor={color}
        checkedIcon="check-square"
        uncheckedIcon="square-o"
        onPress={() => {
          changeTask(element.id);
        }}
      />
      <Text>{element.task.title}</Text>
    </TaskComponent>
  );
};
export const mapStateToProps = ({ taskReducer: { byIds } }) => {
  return {
    byIds,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeTask: (data) => dispatch(changeTask(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
