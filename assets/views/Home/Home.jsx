import React from "react";
import { Button, Screen, Text } from "../../styles/general";
import Task from "../../components/task/Task";

const Home = ({ navigation }) => {
  return (
    <Screen>
      <Button onPress={() => navigation.navigate("AddTask")}>
        <Text>Add a task</Text>
      </Button>
    </Screen>
  );
};

export default Home;
