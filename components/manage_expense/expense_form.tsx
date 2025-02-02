import { View, StyleSheet } from "react-native";
import Input from "./input";
import { useState } from "react";

function ExpenseForm() {

  const [inputValue,setInputValue] = useState({
    amount: '',
    description: '',
    date: '',
  });

  // const [descriptionValue, setDescriptionValue] = useState('');
  // const [dateValue, setDateValue] = useState('');

  function inputChangedHanler(inputIdentifier: string, enteredValue: string) {
    setInputValue((currentInput) => {
      return {
       ...currentInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  // function dateChanged() {
  //   // update the state with the new amount
  // }

  // function descriptionChanged() {
  //   // update the state with the new amount
  // }

  return (
    <View style={style.formstyle}>
      <View style={style.inputRow}>
        <Input
          label={"Amount"}
          style={style.rowInput}
          config={{
            placeholder: "Enter Amount",
            keyboardType: "decimal-pad",
            returnKeyType: "next",
            autoFocus: true,
            onChangeText: inputChangedHanler.bind(null, 'amount'),
            value: inputValue.amount,
          }}
        />

        <Input
          label={"Date"}
          style={style.rowInput}
          config={{
            placeholder: " YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHanler.bind(null, 'date'),
            value: inputValue.date,
          }}
        />
      </View>

      <Input
        label={"Description"}
        config={{
          multiline: true,
          placeholder: "Enter Description",
          onChangeText: inputChangedHanler.bind(null,'description'),
          value: inputValue.description,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const style = StyleSheet.create({
  formstyle: {
    marginTop: 80,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
