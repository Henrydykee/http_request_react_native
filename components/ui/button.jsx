import { Pressable , View } from "react-native"
import  { Ionicons } from '@expo/vector-icons'


function AddExpenseButton({onPress , icon , color , size}) {

    return <Pressable onPress={onPress} >
        <View style={{ paddingRight: 10 }}>
        <Ionicons name={icon}  size={size} color={color} />
        </View>
    </Pressable>
}

export default AddExpenseButton;