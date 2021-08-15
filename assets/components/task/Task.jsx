import React, { useEffect, useState } from "react";
import { CheckBox, View, SafeAreaView, Text, Alert } from "react-native";

const Task = ({ task }) => {
  const [isSelected, setSelection] = useState(false);
  useEffect(() => {
    console.log(task);
  }, [task.complete]);
  return (
    <View>
      <CheckBox
        value={isSelected}
        onValueChange={(e) => {
          setSelection(e);
          task.complete = e;
        }}
      />
      <Text>{task.title}</Text>
    </View>
  );
};

export default Task;
