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
    modalBg: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#41414150",
    },

    modalView: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 25,
    },

    modalHeading: {
        color: "#6763AC",
        fontSize: 22,
        fontWeight: "800"
    },

    RocketText: {
        color: "#6763AC",
        fontSize: 18,
        fontWeight: "500"
    },

    rocketDesc: {
        paddingVertical: 5,
        paddingLeft: 10,
        color: "#6763AC",
        fontSize: 14,
    }

})

export default styles;