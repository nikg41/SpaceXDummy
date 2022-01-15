import React, { useState, useEffect, useRef } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import RegistartionCard from "../../components/RegistartionCard";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import { useSelector, useDispatch } from 'react-redux'
import OTPInputView from '@twotalltotems/react-native-otp-input';


const OtpScreen = (props) => {
    const userDetails = useSelector(state => state.userDetails);

    const [timer, setTimer] = useState(60);
    const [otp, setOtp] = useState('');
    let intervalRef = useRef();

    const decreaseNum = () => setTimer((prev) => prev - 1);

    useEffect(() => {
        if (timer < 1)
            return;
        intervalRef.current = setInterval(decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, [timer]);


    console.log(userDetails)
    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <Header
                title={"Verify OTP"} />
            <RegistartionCard>
                <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
                    <Text style={styles.textStyle}>
                        {`Please enter 4-digit OTP sent to you at\n`}
                        <Text style={{ color: "#312F57" }}>{userDetails.email}</Text>
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "flex-start",
                    }}>
                        <OTPInputView
                            style={styles.OtpInputView}
                            placeholderCharacter={"-"}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.otpContainer}
                            onCodeFilled={(content) => {
                                setOtp(content)
                            }}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Pressable
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>{"Verify & continue"}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.resendView}>
                        <Text style={styles.dontgetText}>
                            Didn't get OTP? {timer > 0 ?
                                <Text style={styles.resendText}>{`Resend ${timer}s`}</Text> :
                                <Text
                                    style={styles.resend}
                                    onPress={() => { setTimer(60) }}>
                                    {`Resend`}</Text>}</Text>
                    </View>
                </View>
            </RegistartionCard>
        </SafeAreaView>
    </React.Fragment>
};

export default OtpScreen;
