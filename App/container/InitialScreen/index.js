import React from "react";
import { ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native";
import { background } from "../../Images"
import styles from "./styles";

const InitialScreen = (props) => {
    return <SafeAreaView style={styles.container}>
        <ImageBackground
            style={styles.imageStyle}
            source={background}>
            <View style={styles.buttonView}>
                <Pressable
                    onPress={() => props.navigation.navigate("RegisterScreen")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </View>
        </ImageBackground>
    </SafeAreaView>
};

export default InitialScreen;
