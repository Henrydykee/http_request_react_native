
import axios from "axios";
import ExpenseInterface from "../interface/expense_interface";

function StoreExpense() {

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    async function addExpense(expense: ExpenseInterface) {
        try {
            const response = await axios.post(
                `${supabaseUrl}/rest/v1/CRUD`,
                expense,
                {
                    headers: {
                        'apikey': supabaseKey,
                        'Authorization': `Bearer ${supabaseKey}`,
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

