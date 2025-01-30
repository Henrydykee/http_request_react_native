import { View, Text } from "react-native";
import { useLayoutEffect } from "react";
import ExpenseOutput from "../components/expenses_output";

function AllExpenseScreen() {

    return <ExpenseOutput expensesPeriod="Total" />
}

export default AllExpenseScreen;