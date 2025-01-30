import { View, Text } from "react-native";
import ExpenseInterface from "../interface/expense_interface";

function ExpenseSummary({ expenses, periodName }: { periodName: string, expenses: ExpenseInterface[] }) {

    const expenseSum = expenses.reduce((sum: number, expense: ExpenseInterface) =>  {
        return sum + expense.amount
    }, 0 )

    return (
        <View>
            <View>
                <Text>{periodName}</Text>
                <Text>${expenseSum.toFixed(2)}</Text>
            </View>
            {/* <FlatList/> */}

        </View>

    );

}

export default ExpenseSummary