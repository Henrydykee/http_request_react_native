import { View, Text, StyleSheet } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AddExpenseButton from "../components/ui/button";
import { GlobalStyles } from "../utils/style";
import CustomButton from "../components/ui/custom_button";

function ManageExpenseScreen({ route }: { route?: any }) {
  const expense: ExpenseInterface = route.params?.e;
  const navigation = useNavigation();

  const isEditing = expense?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function _delectExpense() {
    navigation.goBack();

  }

  function cancelHandler() {
    navigation.goBack();
  }

  function saveHandler() {
  
    if (isEditing) {
      // update expense
    }else{
      
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
            onPress={_delectExpense}
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
