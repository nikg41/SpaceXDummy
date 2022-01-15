import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import MainHeader from "../../components/MainHeader";
import MainCard from "../../components/MainCard";
import axios from 'axios';

import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants";

const MainScreen = (props) => {
    const [spaceXData, setSpaceXData] = useState({});
    const dispatch = useDispatch();

    const getSpaceXdata = async () => {
        const configurationObject = {
            method: 'get',
            url: "https://api.spacexdata.com/v3/launches",
        };
        const response = await axios(configurationObject);
        setSpaceXData(response.data);
        return
    }

    const onLogoutPress = () => {
        dispatch({ type: LOGOUT });
        props.navigation.navigate("SignInScreen")
    }

    useEffect(() => {
        getSpaceXdata();
    }, []);

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <MainHeader
                title={'SpaceX'}
                onLogoutPress={onLogoutPress} />
            <MainCard>

            </MainCard>
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
