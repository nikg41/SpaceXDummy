import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#312F57",
        flex: 0,
    },

    container: {
        flex: 1,
        backgroundColor: "#312F57"
    },

    mainContainer: {
        flex: 1,
    },

    activityIndicator: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
    },

    dataButton: {
        width: width - 80,
        justifyContent: "space-between",
        alignItems: "center",
        height: 45,
        marginBottom: 18,
        borderRadius: 25,
        flexDirection: "row",
        paddingHorizontal: 30,
        borderWidth: 2
    },
    buttonText: {
        width: "70%"
    },
    yearText: {
        width: "30%",
        textAlign: "right"
    },

    errorText: {
        color: "#312F57",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    }

})

export default styles;