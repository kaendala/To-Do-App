import React, { useEffect, useState } from "react";
import { TaskComponent, Text } from "./style";
import { changeTask } from "../../redux/actions/task.action";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
        containerStyle={{
          padding: 0,
        }}
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
Task.propTypes = {
  element: PropTypes.shape({
    task: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Task);
