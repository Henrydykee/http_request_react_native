import axios from "axios";
import ExpenseInterface from "../interface/expense_interface";


export function StoreExpense(expense : ExpenseInterface) {

    
    async function addExpense(expense: ExpenseInterface) {
        console.log(SUPABASE_URL)
        console.log(SUPABASE_ANON_KEY);
        try {
            const response = await axios.post(
                `${SUPABASE_URL}/rest/v1/CRUD`,
                {
                    "id" :  Math.random().toString(),
                    "description" : expense.description,
                    "amount" : expense.amount,
                    "date" : new Date()
                },
                {
                    headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error adding expense:', error);
            throw error;
        }
    }

    return {
        addExpense
    };
}