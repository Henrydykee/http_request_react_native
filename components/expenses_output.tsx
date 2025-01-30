import { View  } from "react-native";
import ExpenseSummary from "./expenses_summary";
import ExpensesList from "./expenses_list";
import DUMMY_EXPENSES from "../data/dummy_expense"






function ExpenseOutput({  expensesPeriod }: { expensesPeriod: string}) {

    return(
        <View>
            <ExpenseSummary  periodName={expensesPeriod} expenses={DUMMY_EXPENSES}  />
            <ExpensesList expenses={DUMMY_EXPENSES}/>

        </View>
    )
 
}

export default ExpenseOutput;