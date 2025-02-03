import axios from "axios";
import ExpenseInterface from "../interface/expense_interface";



const SUPABASE_URL = "https://xpkkcxienwuuzgqsjyfu.supabase.co";

export async function addExpense(expense: ExpenseInterface) {
  try {
    const response = await axios.post(
      `${SUPABASE_URL}/rest/v1/CRUD`,
      {
        id: Math.random().toString(),
        description: expense.description,
        amount: expense.amount,
        date:  expense.date,
      },
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
}


  export async function getExpenses() {
    try {
      const response = await axios.get(
        `${SUPABASE_URL}/rest/v1/CRUD`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
             Prefer: "return=minimal",
          },}
      );

      console.log(response.data);

      const expense: ExpenseInterface[] = [];
     // iterate over the response data and create a new ExpenseInterface object for each record
      for (const item of response.data){
       const expenseObj ={
        id : item.id,
        amount: item.amount,
        description: item.description,
        date: new Date(item.date)
       }
       expense.push(expenseObj);
    //    return expense;
      }
      return expense;
    } catch (error) {
      console.error("Error getting expense:", error);
      throw error;
    }
  }
