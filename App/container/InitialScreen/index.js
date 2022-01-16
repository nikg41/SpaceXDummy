import React from "react";
import { ImageBackground, Pressable, SafeAreaView, Text, View, StatusBar } from "react-native";
import { background } from "../../Images"
import styles from "./styles";
import { useSelector } from 'react-redux';
import AndroidStatusBar from "../../components/AndroidStatusBar";

const InitialScreen = (props) => {
    const userDetails = useSelector(state => state.userDetails);
    const loggedIn = userDetails.isLoggedIn;
    return <React.Fragment>
        <StatusBar backgroundColor={"#312F57"} />
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.imageStyle}
                source={background}>
                <View style={styles.buttonView}>
                    <Pressable
                        onPress={() => {
                            if (loggedIn) {
                                props.navigation.navigate("MainScreen")
                            } else
                                props.navigation.navigate("RegisterScreen")
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>{loggedIn ? "Continue" : "Get Started"}</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    </React.Fragment>
};

export default InitialScreen;
