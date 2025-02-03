import { ActivityIndicator, View ,Text , StyleSheet} from "react-native";
import { GlobalStyles } from "../../utils/style";

function LoadingOverlay(){

    return <View style={styles.container}>
        <ActivityIndicator size="large" color= "white"/>
        {/* <Text style={{ marginTop: 10, fontSize: 16, color: GlobalStyles.colors.primary400 }}>Loading...</Text> */}
    </View>

}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        padding: 24,
        backgroundColor : GlobalStyles.colors.primary700,
    }
})