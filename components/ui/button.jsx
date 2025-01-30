import { Pressable , View } from "react-native"
import  { Ionicons } from '@expo/vector-icons'


function AddExpenseButton({onPress , icon}) {

    return <Pressable onPress={onPress} >
        <View style={{ paddingRight: 10 }}>
        <Ionicons name={icon}  size={24} color='white' />
        </View>
    </Pressable>
}

export default AddExpenseButton;