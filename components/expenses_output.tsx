import { View, StyleSheet } from "react-native";
import ExpenseSummary from "./expenses_summary";
import ExpensesList from "./expenses_list";
import DUMMY_EXPENSES from "../data/dummy_expense"
import { GlobalStyles } from "../utils/style";
import { Dimensions } from "react-native";






function ExpenseOutput({ expensesPeriod }: { expensesPeriod: string }) {

    return (
        <View style={styles.container}>
            <ExpenseSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
            <ExpensesList expenses={DUMMY_EXPENSES} />

        </View>
    )

}

export default ExpenseOutput;


const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 24,
        paddingTop : 24,
        backgroundColor: GlobalStyles.colors.primary700,
        // height: Dimensions.get("screen").height
        flex: 1

    }
})