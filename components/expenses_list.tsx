import ExpenseInterface from "../interface/expense_interface";
import { View, FlatList, Text } from "react-native";
import ExpenseItem from "./expense_item";




function renderExpenseItem({ item }: { item: ExpenseInterface }) {
    return <ExpenseItem expense={item} />
    // (
    //     <View>
    //         <Text>{item.description}</Text>
    //         <Text>${item.amount.toFixed(2)}</Text>
    //     </View>
    // )

}



function ExpensesList({ expenses }: { expenses: ExpenseInterface[] }) {

    return <FlatList data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
    />

}

export default ExpensesList;