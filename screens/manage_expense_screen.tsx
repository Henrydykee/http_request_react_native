import { View, Text, StyleSheet } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AddExpenseButton from "../components/ui/button";
import { GlobalStyles } from "../utils/style";
import CustomButton from "../components/ui/custom_button";
import { ExpenseContext } from "../store/expense_context";


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
    expenseContext.removeExpense(expense.id);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function saveHandler() {

    const newExpense = {
      id: new Date().toString() + Math.random().toString(),
      description: "Tubes",
      amount: 10.0,
      date: new Date()
    };

    if (isEditing) {
      expenseContext.updateExpense(expense.id, newExpense);
    } else {
      expenseContext.addExpense(newExpense);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.conatainer}>

      <View style={styles.deleteButton} >
      <CustomButton
        children={"Cancel"}
        onPress={cancelHandler}
        mode={"flat"}
      />
            <CustomButton
        children={isEditing ? 'Update' : 'Add'}
        onPress={saveHandler}
        mode={""}
      />
      </View>
 
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
