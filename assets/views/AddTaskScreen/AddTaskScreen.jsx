import React, { useState } from "react";
import {
  Input,
  Title,
  Screen,
  Button,
  ButtonDisable,
  TextButton,
} from "../../styles/general";
import { Middle, Start, End, styles } from "./styles";
import { TouchableWithoutFeedback, View } from "react-native";
import { addNewTask } from "../../redux/actions/task.action";
import { connect } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectDropdown from "react-native-select-dropdown";
import Task from "../../components/task/Task";

const AddTaskScreen = ({ navigation, addTask }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState(null);
  const [deadLine, setDeadLine] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [remind, setRemind] = useState();
  const [repeat, setRepeat] = useState();
  const remindOptions = [
    "10 minutes early",
    "30 minutes early",
    "60 minutes early",
  ];
  const repeatOptions = ["never", "daily", "weekly", "monthly", "annually"];

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (type === "deadLine") {
      setDeadLine(date.toISOString().slice(0, 10));
    }
    if (type === "start") {
      setStartTime(
        date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }
    if (type === "end") {
      setEndTime(
        date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }
    hideDatePicker();
  };
  const createTask = () => {
    let task = {
      title: title,
      deadline: deadLine,
      startTime: startTime,
      endTime: endTime,
      remind: remind,
      repeat: repeat,
    };
    addTask(task);
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <Title>Title</Title>
      <Input
        onChangeText={(e) => setTitle(e)}
        placeholder="Design team meeting"
      ></Input>
      <Title>DeadLine</Title>
      <TouchableWithoutFeedback
        onPress={() => {
          setType("deadLine");
          setDatePickerVisibility(true);
        }}
      >
        <View>
          <Input
            pointerEvents="none"
            selectTextOnFocus={false}
            editable={false}
            placeholder={new Date().toISOString().slice(0, 10)}
            value={deadLine}
          ></Input>
        </View>
      </TouchableWithoutFeedback>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={type === "deadLine" ? "date" : "time"}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Middle>
        <Start>
          <Title>Start time</Title>
          <TouchableWithoutFeedback
            onPress={() => {
              setType("start");
              setDatePickerVisibility(true);
            }}
          >
            <View>
              <Input
                pointerEvents="none"
                selectTextOnFocus={false}
                editable={false}
                placeholder={new Date().toISOString().slice(0, 10)}
                value={startTime}
              ></Input>
            </View>
          </TouchableWithoutFeedback>
        </Start>
        <End>
          <Title>End time</Title>
          <TouchableWithoutFeedback
            onPress={() => {
              setType("end");
              setDatePickerVisibility(true);
            }}
          >
            <View>
              <Input
                pointerEvents="none"
                selectTextOnFocus={false}
                editable={false}
                placeholder={new Date().toISOString().slice(0, 10)}
                value={endTime}
              ></Input>
            </View>
          </TouchableWithoutFeedback>
        </End>
      </Middle>
      <Title>Remind</Title>
      <SelectDropdown
        data={remindOptions}
        defaultButtonText="10 minutes early"
        onSelect={(selectedItem, index) => {
          setRemind(selectedItem);
        }}
        buttonStyle={styles.SelectDropdownButton}
        buttonTextStyle={
          remind ? styles.SelectButtonTextSelected : styles.SelectButtonText
        }
        rowStyle={styles.SelectDropdown}
        rowTextStyle={styles.SelectDropdownText}
      />
      <Title>Repeat</Title>
      <SelectDropdown
        data={repeatOptions}
        defaultButtonText="weekly"
        onSelect={(selectedItem, index) => {
          setRepeat(selectedItem);
        }}
        buttonStyle={styles.SelectDropdownButton}
        buttonTextStyle={
          repeat ? styles.SelectButtonTextSelected : styles.SelectButtonText
        }
        rowStyle={styles.SelectDropdown}
        rowTextStyle={styles.SelectDropdownText}
      />
      <Button onPress={createTask} disabled={!title}>
        <TextButton>Create a task</TextButton>
      </Button>
    </Screen>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => dispatch(addNewTask(data)),
  };
};
export default connect(null, mapDispatchToProps)(AddTaskScreen);
