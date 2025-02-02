import { View ,Text ,TextInput , StyleSheet} from "react-native";
import { GlobalStyles } from "../../utils/style";


interface InputConfig {
    multiline?: boolean;
    [key: string]: any;
}

function Input ({label , config ,style , invalid }: {label: any, config?: InputConfig , style?: any ,invalid?: boolean}){

    const inputStyles = [styles.input]

    if(config &&  config.multiline){
        inputStyles.push({ ...styles.input, ...styles.inputMultiline })
    }

    return <View style={[styles.inputContainer,  style]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]} >{label}</Text>
        <TextInput style={[inputStyles,  invalid && styles.errorText]} {...config}/>
    </View>
}

export default Input;


const styles = StyleSheet.create({
    inputContainer: {
    marginHorizontal : 4,
    marginVertical: 16
    },
    label:{
        fontSize: 16,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },



  errorText: {
    color: GlobalStyles.colors.error50,
    margin: 8,
    backgroundColor : GlobalStyles.colors.error50
  },

  invalidLabel:{
    color: GlobalStyles.colors.error50,
    marginBottom: 4,
  },

    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,

    },
    inputMultiline:{
        minHeight:  100,
        textAlignVertical: 'top'
    }

})