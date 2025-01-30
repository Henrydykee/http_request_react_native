import ExpenseInterface from "../interface/expense_interface";
import { View , FlatList , Text } from "react-native";




function renderExpenseItem({ item }: { item: ExpenseInterface }){
    return (
        <View>
            <Text>{item.description}</Text>
            <Text>${item.amount.toFixed(2)}</Text>
        </View>
    )

}



function ExpensesList({ expenses }: { expenses: ExpenseInterface[] }) {

    return <FlatList data={expenses}
        renderItem={renderExpenseItem} />

}

export default ExpensesList;