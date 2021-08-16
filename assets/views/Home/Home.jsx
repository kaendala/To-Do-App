import React, { useEffect, useState } from "react";
import { Title } from "./styles";
import { Button, Screen, Text, TextButton } from "../../styles/general";
import { connect } from "react-redux";
import Task from "../../components/task/Task";

const Home = ({ tasks, byIds, navigation }) => {
  const [completed, setCompleted] = useState(null);
  const [pending, setPending] = useState(null);
  useEffect(() => {
    const listComplete = [];
    const listPendings = [];
    if (tasks.length > 0) {
      tasks.forEach((i) => {
        const element = {
          task: byIds[i].task,
          id: i,
          completed: byIds[i].completed,
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
  }, [byIds]);
  return (
    <Screen>
      <Title>Completed task</Title>
      {completed &&
        completed.map((element, index) => (
          <Task key={index} element={element}></Task>
        ))}
      <Title>Pending Tasks</Title>
      {pending &&
        pending.map((element, index) => (
          <Task key={index} element={element}></Task>
        ))}
      <Button onPress={() => navigation.navigate("AddTask")}>
        <TextButton>Add a task</TextButton>
      </Button>
    </Screen>
  );
};
export const mapStateToProps = ({ taskReducer: { tasks, byIds } }) => {
  return {
    tasks,
    byIds,
  };
};
export default connect(mapStateToProps)(Home);
