import { Pressable , View } from "react-native"
import  { Ionicons } from '@expo/vector-icons'


import { GestureResponderEvent } from "react-native";

interface AddExpenseButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    size: number;
}

function AddExpenseButton({onPress, icon, color, size}: AddExpenseButtonProps) {

    return <Pressable onPress={onPress} >
        <View style={{ paddingRight: 10 }}>
        <Ionicons name={icon}  size={size} color={color} />
        </View>
    </Pressable>
}

export default AddExpenseButton;