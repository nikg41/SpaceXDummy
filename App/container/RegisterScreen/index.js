import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import RegistartionCard from "../../components/RegistartionCard";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import SocialLogin from "../../components/SocialLogin";
const RegisterScreen = () => {
    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <Header
                title={"Sign up"} />
            <RegistartionCard>
                <SocialLogin />
            </RegistartionCard>
        </SafeAreaView>
    </React.Fragment>
};

export default RegisterScreen;
