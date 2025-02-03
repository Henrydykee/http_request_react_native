import { View, Text } from "react-native";
import ExpenseOutput from "../components/expenses_output";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/expense_context";
import { getExpenses } from "../network/http";
import ExpenseInterface from "../interface/expense_interface";
import LoadingOverlay from "../components/ui/loading_overlay";
import ErrorOverlay from "../components/ui/error_overlay";

function RecentExpenseScreen() {
  const [isFetching, setIsFectching] = useState(true);
  const [ error, setError ]= useState<unknown>();
  const expenseCtx = useContext(ExpenseContext);

  //const[fetchedExpenses, setFetchedExpenses] =  useState<ExpenseInterface[]>([]);

  useEffect(() => {
    async function _run() {
      setIsFectching(true);
      try {
        const expenses: ExpenseInterface[] = await getExpenses();
        expenseCtx.setExpense(expenses);
      } catch (error) {
        setError("could not get expense");
      }
      setIsFectching(false);
    }
    _run();
  }, []);


  if(error && !isFetching){
    return <ErrorOverlay message={error.toString()} />
  }


  if(isFetching){
    return <LoadingOverlay/>
  }

  // Filter expenses by date (last 7 days)
  const recent = expenseCtx.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const today = new Date();

    // Calculate difference in milliseconds
    const diffTime = Math.abs(today.getTime() - expenseDate.getTime());
    // Convert to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays <= 7;
  });

  return (
    <ExpenseOutput expensesPeriod="Last 7 days" expense={expenseCtx.expenses} />
  );
}

export default RecentExpenseScreen;
