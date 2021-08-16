import React, { useState } from "react";
import { Button, Input, Screen, TextButton, Title } from "../../styles/general";
import { End, Middle, Start, styles, View } from "./styles";
import { addNewTask } from "../../redux/actions/task.action";
import { connect } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Icon } from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";
import { TouchableWithoutFeedback } from "react-native";

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
      <View>
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
        <Icon
          name="code"
          containerStyle={styles.arrowContainerIcon}
          iconStyle={styles.Icon}
          size={30}
        />
      </View>
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
          <Icon
            name="schedule"
            containerStyle={styles.containerIcon}
            iconStyle={styles.Icon}
            size={20}
          />
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
          <Icon
            name="schedule"
            containerStyle={styles.containerIcon}
            iconStyle={styles.Icon}
            size={20}
          />
        </End>
      </Middle>
      <View>
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
        <Icon
          name="code"
          containerStyle={styles.arrowContainerIcon}
          iconStyle={styles.Icon}
          size={30}
        />
      </View>
      <View>
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
        <Icon
          name="code"
          containerStyle={styles.arrowContainerIcon}
          iconStyle={styles.Icon}
          size={30}
        />
      </View>
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
