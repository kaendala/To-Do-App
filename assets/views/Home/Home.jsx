import React, { useEffect, useState } from "react";
import { Title, Text } from "./styles";
import { Button, Screen, TextButton } from "../../styles/general";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import Task from "../../components/task/Task";
import { updateTask } from "../../redux/actions/task.action";

const Home = ({ taskReducer, navigation, updateTask }) => {
  const [completed, setCompleted] = useState(null);
  const [pending, setPending] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const listComplete = [];
    const listPendings = [];
    if (taskReducer.tasks.length > 0) {
      taskReducer.tasks.forEach((i) => {
        const element = {
          task: taskReducer.byIds[i].task,
          id: i,
          completed: taskReducer.byIds[i].completed,
        };
        if (element.completed) {
          listComplete.push(element);
        } else {
          listPendings.push(element);
        }
      });
    }
    setCompleted(listComplete);
    setPending(listPendings);
    storeData(taskReducer);
  }, [taskReducer.byIds]);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("taskReducer", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("taskReducer");
      if (value) {
        updateTask(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <Screen>
      <Title>Completed tasks</Title>
      {completed && completed.length > 0 ? (
        completed.map((element, index) => (
          <Task key={index} element={element}></Task>
        ))
      ) : (
        <Text>no completed tasks</Text>
      )}
      {!completed && <Title>you have no tasks completed</Title>}
      <Title second>Pending Tasks</Title>
      {pending && pending.length > 0 ? (
        pending.map((element, index) => (
          <Task key={index} element={element}></Task>
        ))
      ) : (
        <Text>no pendings tasks</Text>
      )}
      <Button
        onPress={() => {
          navigation.navigate("AddTask");
        }}
      >
        <TextButton>Add a task</TextButton>
      </Button>
    </Screen>
  );
};
export const mapStateToProps = ({ taskReducer }) => {
  return {
    taskReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (data) => dispatch(updateTask(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
