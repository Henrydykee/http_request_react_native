import { View, Text } from "react-native";
import ExpenseOutput from "../components/expenses_output";

function RecentExpenseScreen() {
  return <ExpenseOutput expensesPeriod="Last 7 days"/>
}

export default RecentExpenseScreen;