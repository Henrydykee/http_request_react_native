import axios, { AxiosInstance } from "axios";
import ExpenseInterface from "../interface/expense_interface";

const SUPABASE_URL = "https://xpkkcxienwuuzgqsjyfu.supabase.co";
const SUPABASE_ANON_KEY =""

// Create an Axios instance with default configuration.
const api: AxiosInstance = axios.create({
  baseURL: `${SUPABASE_URL}/rest/v1/CRUD`,
  headers: {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    // For most operations, you may use minimal returns.
    Prefer: "return=minimal",
  },
});

/**
 * Adds a new expense.
 * @param expense - The expense details.
 * @returns The response data from Supabase.
 */
export async function addExpense(expense: ExpenseInterface): Promise<any> {
  try {
    const payload = {
      id: Math.floor(Math.random() * 1000000).toString(),
      description: expense.description,
      amount: expense.amount,
      date: expense.date,
    };

    const { data } = await api.post("", payload);
    return data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
}

/**
 * Retrieves all expenses.
 * @returns An array of expenses.
 */
export async function getExpenses(): Promise<ExpenseInterface[]> {
  try {
    const { data } = await api.get("");
    // Map each item to the ExpenseInterface format.
    const expenses: ExpenseInterface[] = data.map((item: any) => ({
      id: item.id,
      description: item.description,
      amount: item.amount,
      date: new Date(item.date),
    }));
    return expenses;
  } catch (error) {
    console.error("Error getting expenses:", error);
    throw error;
  }
}

/**
 * Updates an existing expense.
 * @param id - The ID of the expense to update.
 * @param expense - The updated expense data.
 * @returns The updated record(s) from Supabase.
 */
export async function updateExpense(
  id: string,
  expense: ExpenseInterface
): Promise<any> {
  try {
    const payload = {
      description: expense.description,
      amount: expense.amount,
      date: expense.date,
    };

    // Override the Prefer header to return the updated record(s).
    const { data } = await api.patch("", payload, {
      params: { id: `eq.${id}` },
      headers: { Prefer: "return=representation" },
    });
    return data;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
}

/**
 * Removes an expense by ID.
 * @param id - The ID of the expense to remove.
 */
export async function removeExpense(id: string): Promise<void> {
  try {
    await api.delete("", {
      params: { id: `eq.${id}` },
    });
  } catch (error) {
    console.error("Error removing expense:", error);
    throw error;
  }
}
