import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import RegistartionCard from "../../components/RegistartionCard";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import SocialLogin from "../../components/SocialLogin";
import { TextInput } from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty } from "ramda";
const EMAIL_PATTERN = new RegExp('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$');
const PASSWORD_PATTERN = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#&])(?=.{8,})");
// (?=.*[0-9])(?=.*[@$!%*#?&])
const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordButton, setPasswordButton] = useState(true);
    const [confirmPasswordButton, setConfirmPasswordButton] = useState(true);
    const [termsButton, setTermsButton] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const onSignUpPressed = () => {
        let isEmailValid = EMAIL_PATTERN.test(email);
        let isPasswordvalid = PASSWORD_PATTERN.test(password);

        if (!isEmpty(email.trim()) && !isEmpty(password) && isEmailValid
            && password === confirmPassword && termsButton && isPasswordvalid) {
            console.log("::::: :, Hello")
        }
        else {
            if (isEmpty(email.trim())) {
                setEmailError("Please enter your email")
            } else if (!isEmailValid) {
                setEmailError("Please enter correct email")
            }
            if (isEmpty(password)) {
                setPasswordError("Please enter your password")
            } else if (!isPasswordvalid) {
                setPasswordError("Password must contain 1 Capital Letter, 1 digit and 1 special character @#&")
            }
            if (!isEmpty(password) && password !== confirmPassword) {
                setConfirmPasswordError("Confirm Your Password")
            }

        }
    }

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <Header
                title={"Sign up"} />
            <RegistartionCard>
                <SocialLogin
                    startText={"Sign up"} />
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.signupView}>
                    <View style={styles.textInputView}>
                        <TextInput
                            value={email}
                            placeholderTextColor="#7F7F7F"
                            style={styles.textInputStyle}
                            placeholder="Enter your email"
                            onChangeText={(value) => {
                                setEmail(value.trim());
                                setEmailError('')
                            }}
                            keyboardType="default"
                        />
                    </View>
                    {!isEmpty(emailError) && <Text style={styles.errorText}>{emailError}</Text>}
                    <View style={[styles.textInputView, styles.passwordView]}>
                        <TextInput
                            value={password}
                            placeholderTextColor="#7F7F7F"
                            style={styles.textInputStyle}
                            placeholder="Password"
                            onChangeText={(value) => {
                                setPassword(value.trim());
                                setPasswordError('')
                            }}
                            keyboardType="default"
                            secureTextEntry={passwordButton}
                        />
                        <Pressable
                            onPress={() => setPasswordButton((prevValue) => !prevValue)}>
                            <Icons
                                name={passwordButton ? 'eye-off-outline' : 'eye-outline'}
                                color="#7F7F7F"
                                size={20}
                            />
                        </Pressable>
                    </View>
                    {!isEmpty(passwordError) && <Text style={styles.errorText}>{passwordError}</Text>}
                    {isEmpty(passwordError) && <Text style={styles.passwordText}>{"Password must contain 1 Capital Letter, 1 digit and 1 special character @#&"}</Text>}
                    <View style={[styles.textInputView, styles.passwordView]}>
                        <TextInput
                            value={confirmPassword}
                            placeholderTextColor="#7F7F7F"
                            style={styles.textInputStyle}
                            placeholder="Confirm Password"
                            onChangeText={(value) => {
                                setConfirmPassword(value.trim());
                                setConfirmPasswordError('')
                            }}
                            keyboardType="default"
                            secureTextEntry={confirmPasswordButton}
                        />
                        <Pressable
                            onPress={() => setConfirmPasswordButton((prevValue) => !prevValue)}>
                            <Icons
                                name={confirmPasswordButton ? 'eye-off-outline' : 'eye-outline'}
                                color="#7F7F7F"
                                size={20}
                            />
                        </Pressable>
                    </View>
                    {!isEmpty(confirmPasswordError) && <Text style={styles.errorText}>{confirmPasswordError}</Text>}

                    <View style={styles.termsView}>
                        <Pressable
                            onPress={() => setTermsButton((prevValue) => !prevValue)}>
                            <Icons
                                name={termsButton ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                color="#312F57"
                                size={22}
                            />
                        </Pressable>
                        <Text style={styles.termsText}>I agree to our <Text style={{ color: "#312F57" }}>Terms and Conditions</Text> Agreement</Text>
                    </View>

                    <Pressable
                        onPress={onSignUpPressed}
                        style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </Pressable>
                    <Text style={styles.signInText}>Already have an account? <Text style={{ color: "#312F57" }}>Sign In</Text></Text>
                </KeyboardAwareScrollView>

            </RegistartionCard>
        </SafeAreaView>
    </React.Fragment>
};

export default RegisterScreen;
