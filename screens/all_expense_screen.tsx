import { View, Text } from "react-native";
import { useContext } from "react";
import ExpenseOutput from "../components/expenses_output";
import { ExpenseContext } from "../store/expense_context";

function AllExpenseScreen() {
   const expenseCtx = useContext(ExpenseContext);


    return <ExpenseOutput expensesPeriod="Total" expense={expenseCtx.expenses} />
}

export default AllExpenseScreen;