import { View, StyleSheet , Alert } from "react-native";
import Input from "./input";
import { useState } from "react";
import CustomButton from "../ui/custom_button";
import { GlobalStyles } from "../../utils/style";
import ExpenseInterface from "../../interface/expense_interface";

function ExpenseForm({
  isEditing,
  onCancel,
  onSubmit,
  expense
}: {
  isEditing: any;
  onCancel: any;
  onSubmit: any;
  expense?: ExpenseInterface;
}) {


  const [inputValue, setInputValue] = useState({
    amount: expense?.amount.toString() || "",
    description: expense?.description || "",
    date: expense?.date.toISOString().slice(0, 10) || "",
  });

  function inputChangedHanler(inputIdentifier: string, enteredValue: string) {
    setInputValue((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData: ExpenseInterface = {
      amount: parseFloat(inputValue.amount?.toString() || "0"),
      description: inputValue.description,
      date: new Date(inputValue.date),
      id: new Date().toString() + Math.random().toString(),
    };


    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const descriptionIsValid = expenseData.description.trim() !== "";
    const dateIsValid =!isNaN(new Date(expenseData.date).getTime());

    if (amountIsValid && descriptionIsValid && dateIsValid){
      onSubmit(expenseData);
    } else{
      Alert.alert("Invalid Input","Please enter valid amount, description and date.");
    }
    // onSubmit(expenseData);
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
            onChangeText: inputChangedHanler.bind(null, "amount"),
            value: inputValue.amount,
          }}
        />

        <Input
          label={"Date"}
          style={style.rowInput}
          config={{
            placeholder: " YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHanler.bind(null, "date"),
            value: inputValue.date,
          }}
        />
      </View>

      <Input
        label={"Description"}
        config={{
          multiline: true,
          placeholder: "Enter Description",
          onChangeText: inputChangedHanler.bind(null, "description"),
          value: inputValue.description,
        }}
      />

      <View style={style.deleteButton}>
        <CustomButton children={"Cancel"} onPress={onCancel} mode={"flat"} />
        <CustomButton
          children={isEditing ? "Update" : "Add"}
          onPress={submitHandler}
          mode={""}
        />
      </View>
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
  conatainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
