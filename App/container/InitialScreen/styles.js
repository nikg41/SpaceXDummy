import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1 },

    imageStyle: {
        flex: 1,
        justifyContent: "flex-end"
    },

    buttonView: {
        alignSelf: 'center',
        marginBottom: 40,
        width: "100%"
    },

    button: {
        backgroundColor: "#DFDFDF",
        width: "50%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        elevation: 20,
        zIndex: 20,
        alignSelf: "center"
    },

    buttonText: {
        color: "#393737",
        fontSize: 16,
        fontWeight: "700"
    }
})

export default styles;