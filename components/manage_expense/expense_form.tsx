import { View, StyleSheet } from "react-native";
import Input from "./input";

function ExpenseForm() {
  function amountChanged() {
    // update the state with the new amount
  }

  function dateChanged() {
    // update the state with the new amount
  }

  function descriptionChanged() {
    // update the state with the new amount
  }

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
            onChangeText: amountChanged,
          }}
        />

        <Input
          label={"Date"}
          style={style.rowInput}
          config={{
            placeholder: " YYYY-MM-DD",
            maxLength: 10,
            onChangeText: dateChanged,
          }}
        />
      </View>

      <Input
        label={"Description"}
        config={{
          multiline: true,
          placeholder: "Enter Description",
          onChangeText: descriptionChanged,
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
