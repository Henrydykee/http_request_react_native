import { View, Text ,StyleSheet } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AddExpenseButton from "../components/ui/button";
import { GlobalStyles } from "../utils/style";

function ManageExpenseScreen({ route }: { route?: any }) {
  const expense: ExpenseInterface = route.params?.e;
  const navigation = useNavigation();

  const isEditing = expense?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function _delectExpense() {}

  return (
    <View style = {styles.conatainer}>
      {isEditing && (
        <View style = {styles.deleteContainer}>
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

    conatainer:{
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary800,
    },

    deleteContainer:{
        marginTop: 16,
        paddingTop : 8,
        paddingBottom : 8,
        borderWidth : 1,
        borderColor : GlobalStyles.colors.primary200,
        alignItems : 'center'
    }

})
