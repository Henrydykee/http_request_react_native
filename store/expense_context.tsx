import { createContext, useReducer } from "react";
import ExpenseInterface from "../interface/expense_interface";
import DUMMY_EXPENSES from "../data/dummy_expense";

// Define the context type
interface ExpenseContextType {
  expenses: ExpenseInterface[];
  addExpense: (expense: ExpenseInterface) => void;
  removeExpense: (expenseId: string) => void;
  updateExpense: (expenseId: string, updatedExpense: ExpenseInterface) => void;
  setExpense: (expense: ExpenseInterface[]) => void;

}

// Define action types
type ExpenseAction = 
  | { type: "ADD_EXPENSE"; expense: ExpenseInterface }
  | { type: "REMOVE_EXPENSE"; expenseId: string }
  | { type: "SET_EXPENSES"; expenses: ExpenseInterface[] }
  | { type: "UPDATE_EXPENSE"; expenseId: string; updatedExpense: ExpenseInterface };

// Create context with proper typing
export const ExpenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: () => { },
  removeExpense: () => { },
  updateExpense: () => { },
  setExpense: function (expense: ExpenseInterface[]): void {}
});

// Type the reducer function with proper action types
function expensesReducer(state: ExpenseInterface[], action: ExpenseAction): ExpenseInterface[] {
  switch (action.type) {
    case "ADD_EXPENSE": {
     // const id = new Date().toString() + Math.random().toString();
      return [
        action.expense,
        ...state,
      ];
    }

    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.expenseId);
    case "UPDATE_EXPENSE": {
      const updateableExpenseIndex = state.findIndex(
        (e) => e.id === action.expenseId
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.updatedExpense };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    }
    case "SET_EXPENSES":
      const invertedarray = action.expenses.reverse();
      return invertedarray;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }: { children: React.ReactNode }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData: ExpenseInterface) {
    dispatch({
      type: "ADD_EXPENSE",
      expense: expenseData,
    });
  }

  function removeExpense(expenseId: string) {
      dispatch({
      type: "REMOVE_EXPENSE",
      expenseId: expenseId,
    });
  }

  function updateExpense(expenseId: string, updatedExpense: ExpenseInterface) {
    dispatch({
      type: "UPDATE_EXPENSE",
      expenseId: expenseId,
      updatedExpense: updatedExpense,
    });
  }

  function setExpenses(expenses : ExpenseInterface[]) {
    dispatch({
      type: "SET_EXPENSES",
      expenses: expenses,
    });
  }

  const value: ExpenseContextType = {
    expenses: expenseState,
    addExpense,
    removeExpense,
    updateExpense,
    setExpense: setExpenses,  
    
  };

  

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;