import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const MainHeader = (props) => {
    return <View style={styles.headerView}>
        <Pressable onPress={() => { props.setFilterPressed(true) }}>
            <Text style={styles.headerText}>Filter</Text>
        </Pressable>
        <Text style={styles.headerText}>{props.title}</Text>
        <Pressable onPress={() => { props.onLogoutPress() }}>
            <Text style={styles.headerText}>Logout</Text>
        </Pressable>
    </View>
};

export default MainHeader;
