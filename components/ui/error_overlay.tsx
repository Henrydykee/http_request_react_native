
import { ActivityIndicator, View ,Text , StyleSheet, GestureResponderEvent, } from "react-native";
import { GlobalStyles } from "../../utils/style";
import Button from "./button";

function ErrorOverlay({message}: {message :string}) {

    return <View style={styles.container}>
        <Text style={[styles.text ,styles.title]} >An Error Occured!</Text>
        <Text style={styles.title}>{message}</Text>
        {/* <Button onPress={function (event: GestureResponderEvent): void {
            throw new Error("Function not implemented.");
        } } icon={"filter"} color={""} size={0}> Okay </Button> */}
    </View>

}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        padding: 24,
        backgroundColor : GlobalStyles.colors.primary700,
    },
    text:{
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    title:{
        fontSize: 16,
        marginBottom: 16,
        color: "white"
    
    },
    // message:{
    //     fontSize: 14,
    //     marginBottom: 16,
    // }
})