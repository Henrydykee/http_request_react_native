import { View, StyleSheet, Alert, Text } from "react-native";
import Input from "./input";
import { useState } from "react";
import CustomButton from "../ui/custom_button";
import { GlobalStyles } from "../../utils/style";
import ExpenseInterface from "../../interface/expense_interface";

function ExpenseForm({
  isEditing,
  onCancel,
  onSubmit,
  expense,
}: {
  isEditing: any;
  onCancel: any;
  onSubmit: any;
  expense?: ExpenseInterface;
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: expense?.amount.toString() || "",
      isValid: true,
    },
    description: {
      value: expense?.description || "",
      isValid: true,
    },
    date: {
      value: expense?.date.toISOString().slice(0, 10) || "",
      isValid: true,
    },
    // description: expense?.description || "",
    // date: expense?.date.toISOString().slice(0, 10) || "",
  });

  function inputChangedHanler(inputIdentifier: string, enteredValue: string) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: enteredValue.trim() !== "",
        },
      };
    });
  }

  function submitHandler() {
    const expenseData: ExpenseInterface = {
      amount: parseFloat(inputs.amount.value?.toString() || "0"),
      description: inputs.description.value,
      date: new Date(inputs.date.value),
      id: new Date().toString() + Math.random().toString(),
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const descriptionIsValid = expenseData.description.trim() !== "";
    const dateIsValid = !isNaN(new Date(expenseData.date).getTime());

    if (amountIsValid && descriptionIsValid && dateIsValid) {
      onSubmit(expenseData);
    } else {
      // Alert.alert(
      //   "Invalid Input",
      //   "Please enter valid amount, description and date."
      // );
      setInputs((currentInputs) => {
        return {
          amount: {
            ...currentInputs.amount,
            isValid: amountIsValid,
          },
          description: {
            ...currentInputs.description,
            isValid: descriptionIsValid,
          },
          date: {
            ...currentInputs.date,
            isValid: dateIsValid,
          },
        };
      });
    }
    // onSubmit(expenseData);
  }

  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={style.formstyle}>
      <View style={style.inputRow}>
        <Input
          label={"Amount"}
          style={style.rowInput}
          invalid={!inputs.amount.isValid}
          config={{
            placeholder: "Enter Amount",
            keyboardType: "decimal-pad",
            returnKeyType: "next",
            autoFocus: true,
            onChangeText: inputChangedHanler.bind(null, "amount"),
            value: inputs.amount.value,
          }}
        />

        <Input
          label={"Date"}
          style={style.rowInput}
          invalid={!inputs.date.isValid}
          config={{
            placeholder: " YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHanler.bind(null, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label={"Description"}
        invalid={!inputs.description.isValid}
        config={{
          multiline: true,
          placeholder: "Enter Description",
          onChangeText: inputChangedHanler.bind(null, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsValid && (
        <Text style={style.errorText}>Please Check your entered data</Text>
      )}

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

  errorText: {
    color: GlobalStyles.colors.error50,
    textAlign: "center",
    margin: 8,
  },

  invalidLabel:{
    color: GlobalStyles.colors.error50,
    marginBottom: 4,
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
