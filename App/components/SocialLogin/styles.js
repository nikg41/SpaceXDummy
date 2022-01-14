import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;

const styles = StyleSheet.create({

    socialLoginView: {
        marginTop: 10
    },
    buttonStyle: {
        width: width - 30,
        borderRadius: 35,
        height: 40,
        flexDirection: 'row'
    },

    facebook: {
        backgroundColor: "#9FACC9",
    },

    iconStyle: {
        marginLeft: 0,
        marginTop: 0,
        height: 40,
        width: 40
    },

    socialText: {
        alignSelf: "center",
        marginLeft: 35,
        color: '#fff',
        fontSize: 14,
        fontWeight: "500"
    },

    twitter: {
        backgroundColor: "#9CD2EF",
        marginTop: 15
    },
    google: {
        backgroundColor: "#E8A99C",
        marginTop: 15
    },

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
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center"
    }


})

export default styles;