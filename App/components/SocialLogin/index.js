import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { SocialIcon } from 'react-native-elements';

const SocialLogin = (props) => {
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

        <Pressable style={[styles.buttonStyle, styles.google]}>
            <SocialIcon
                type="google-plus-official"
                raised={false}
                style={styles.iconStyle}
            />
            <Text style={styles.socialText}>{`${props.startText} with Google`}</Text>
        </Pressable>
    </View>
};

export default SocialLogin;
