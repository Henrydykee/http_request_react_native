import { View , Text } from "react-native";
import ExpenseInterface from "../interface/expense_interface";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";


function ManageExpenseScreen({route} : {route? : any}){
    const expense: ExpenseInterface = route.params?.e;
       const navigation = useNavigation();

    const isEditing = expense?.id
    
    useLayoutEffect(() =>{
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
        
    }, [navigation, isEditing]) ;



    return (
        <View>
            <Text>Manage {expense?.id} Screen</Text>
        </View>
    );
}

export default ManageExpenseScreen;