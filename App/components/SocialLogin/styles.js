import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;

const styles = StyleSheet.create({

    socialLoginView: {
        marginTop: 10
    },
    buttonStyle: {
        width: width - 30,
        borderRadius: 35,
        height: 45,
        flexDirection: 'row'
    },

    facebook: {
        backgroundColor: "#9FACC9",
    },

    iconStyle: {
        marginLeft: 0,
        marginTop: 0,
        height: 45,
        width: 45
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


})

export default styles;