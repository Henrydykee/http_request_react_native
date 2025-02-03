import { View, Text, StyleSheet ,TextInput } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AddExpenseButton from "../components/ui/button";
import { GlobalStyles } from "../utils/style";
import CustomButton from "../components/ui/custom_button";
import { ExpenseContext } from "../store/expense_context";
import ExpenseForm from "../components/manage_expense/expense_form";
import { addExpense, removeExpense, updateExpense } from "../network/http";



function ManageExpenseScreen({ route }: { route?: any }) {
  const expense: ExpenseInterface = route.params?.e;
  const navigation = useNavigation();
  const expenseContext = useContext(ExpenseContext);

  const isEditing = expense?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function delectExpense() {
    removeExpense(expense.id);
    expenseContext.removeExpense(expense.id);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

    function saveHandler(expenseData : ExpenseInterface) {

    // const newExpense = {
    //   id: new Date().toString() + Math.random().toString(),
    //   description: "Tubes",
    //   amount: 10.0,
    //   date: new Date()
    // };

    if (isEditing) {
      updateExpense(expense.id,expenseData);
      expenseContext.updateExpense(expense.id, expenseData);
    } else {
      addExpense(expenseData)
      expenseContext.addExpense(expenseData);
    }
    navigation.goBack();
  }



  return (
    <View style={styles.conatainer}>
      <ExpenseForm expense={expense}  isEditing={isEditing} onCancel={cancelHandler} onSubmit={saveHandler}/>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <AddExpenseButton
            onPress={delectExpense}
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={24}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },


  deleteButton: {
    flexDirection :'row',
    justifyContent: 'center',
    alignContent : 'center',
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
