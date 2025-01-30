import { View, Text, StyleSheet } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import { GlobalStyles } from "../utils/style";

function ExpenseSummary({ expenses, periodName }: { periodName: string, expenses: ExpenseInterface[] }) {

    const expenseSum = expenses.reduce((sum: number, expense: ExpenseInterface) => {
        return sum + expense.amount
    }, 0)

    return (

        <View style={styles.container}>
            <Text style={styles.perido} >{periodName}</Text>
            <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
        </View>

    );

}

export default ExpenseSummary


const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    perido: {
        fontSize: 15,
        color: GlobalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500,
    }

}) 