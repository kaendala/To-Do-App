import React, { useState } from "react";
import { Input, Title, Screen, Button, Text } from "../../styles/general";
import { Middle, Start, End, styles } from "./styles";
import { TouchableWithoutFeedback, View } from "react-native";
import { addNewTask } from "../../redux/actions/task.action";
import { connect } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PropTypes from "prop-types";
import SelectDropdown from "react-native-select-dropdown";

const AddTaskScreen = ({ navigation, changeTask }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
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
      complete: false,
    };
    changeTask(task);
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
      <Button onPress={createTask}>
        <Text>Create a task</Text>
      </Button>
    </Screen>
  );
};
AddTaskScreen.prototype = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadline: PropTypes.instanceOf(Date),
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    remind: PropTypes.string.isRequired,
    repeat: PropTypes.string.isRequired,
  }),
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTask: (data) => dispatch(addNewTask(data)),
  };
};
export default connect(null, mapDispatchToProps)(AddTaskScreen);
