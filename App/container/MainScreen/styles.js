import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('window').height - 180;
const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#312F57",
        flex: 0,
    },

    container: {
        flex: 1,
        backgroundColor: "#312F57"
    },

})

export default styles;