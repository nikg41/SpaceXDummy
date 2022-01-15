import React, { useEffect } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { SocialIcon } from 'react-native-elements';
import { GoogleSignin } from 'react-native-google-signin';
import { useDispatch } from "react-redux";
import { SOCIAL_LOGIN } from "../../constants";
const SocialLogin = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: '1095881775351-88afcnijmgt0ijg0djcskr01vai4ftuc.apps.googleusercontent.com',
            offlineAccess: true,
            hostedDomain: '',
            loginHint: '',
            forceConsentPrompt: true,
            accountName: '',
            iosClientId: '1095881775351-mkr2gmbdh10quq5ojjevabu51dk5jo02.apps.googleusercontent.com'
        });
    })

    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            dispatch({
                type: SOCIAL_LOGIN,
                payload: {
                    email: userInfo.user.email,
                    socialSigninType: "Google"
                }
            });
            props.onSocialLogin();
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    return <View style={styles.socialLoginView}>
        <Pressable style={[styles.buttonStyle, styles.facebook]}>
            <SocialIcon
                type="facebook"
                raised={false}
                style={styles.iconStyle}
            />
            <Text style={styles.socialText}>{`${props.startText} with Facebook`}</Text>
        </Pressable>
        <Pressable style={[styles.buttonStyle, styles.twitter]}>
            <SocialIcon
                type="twitter"
                raised={false}
                style={styles.iconStyle}
            />
            <Text style={styles.socialText}>{`${props.startText} with Twitter`}</Text>
        </Pressable>

        <Pressable
            onPress={() => {
                googleSignIn()
            }}
            style={[styles.buttonStyle, styles.google]}>
            <SocialIcon
                type="google-plus-official"
                raised={false}
                style={styles.iconStyle}
            />
            <Text style={styles.socialText}>{`${props.startText} with Google`}</Text>
        </Pressable>
        <View style={styles.orView}>
            <View style={styles.horizontalLine} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.horizontalLine} />
        </View>
    </View>
};

export default SocialLogin;
