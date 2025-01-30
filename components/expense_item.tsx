import { View, Text, Pressable, StyleSheet } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import { GlobalStyles } from "../utils/style";


function ExpenseItem({ expense }: { expense: ExpenseInterface }) {
    return (
        <Pressable>
            <View  style= {styles.expenseItem}>
                <Text style={[styles.textBase , styles.textDescription]} >{expense.description}</Text>
                <Text style={styles.textBase}>{expense.date.toDateString()}</Text>
                <View>
                <View style={styles.amountContainer}>
                    <Text style ={styles.amountText}>{expense.amount}</Text>
                </View>
            </View>
            </View>
          
        </Pressable>
    )

}

export default ExpenseItem;

const styles = StyleSheet.create({

    expenseItem: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },

    textBase: {
        color: GlobalStyles.colors.primary50,
    },

    textDescription: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },

})