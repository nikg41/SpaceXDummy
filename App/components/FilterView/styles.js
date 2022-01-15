import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    horizontalLine: {
        width: "30%",
        height: 1,
        backgroundColor: "#c1c1c1"
    },

    orText: {
        color: "#c1c1c1",
        marginHorizontal: 20
    },

    orView: {
        flexDirection: "row",
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    dataButton: {
        width: width - 30,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 25,
        flexDirection: "row",
        paddingHorizontal: 30,
        borderWidth: 2,
        borderColor: "#312F57"
    },

    dateView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    buttonText: {
        color: "#312F57",
        fontSize: 14,
        fontWeight: "600"
    },

    headingText: {
        color: "#20262F",
        fontSize: 16
    },
    dobButton: {
        paddingVertical: 10,
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#312F57",
        paddingHorizontal: 15,
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row"
    },

    dobText: {
        color: "#312F57",
        fontSize: 13,
        paddingRight: 15
    },

    dobEmptytext: {
        color: "#636189",
        fontSize: 13,
        paddingRight: 15
    },

    modalContainerStyle: {
        flex: 1,
        position: "relative",
        backgroundColor: "#41414150"
    },

    modalDoneButtonStyle: {
        height: 44,
        justifyContent: "center"
    },

    modalDoneTextStyle: {
        fontSize: 15,
        color: "#0E3067"
    },

    modalDoneButtonContainerStyle: {
        height: 44,
        backgroundColor: "#FAFAF8",
        alignItems: "flex-end",
        width: "100%",
        justifyContent: "center",
        paddingRight: 10
    },

    modalWrapperStyle: {
        height: 260,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },
    errorText: {
        color: "#ED1B2E",
        paddingVertical: 6
    },
})

export default styles;