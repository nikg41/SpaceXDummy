import React, { useState, useEffect } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View, ActivityIndicator, Modal } from "react-native";
import styles from "./styles";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import MainHeader from "../../components/MainHeader";
import MainCard from "../../components/MainCard";
import axios from 'axios';
import { BASE_URL } from "../../Config";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, STORE_DATA } from "../../constants";
import { isEmpty, path, isNil } from "ramda";
const linearColors = [
    "#EC7561", "#D16C65",
    "#44478D", "#4397CE",
    "#E33D24", "#D16C65",
    "#364261", "#383571"
];
const isNilOrEmpty = text => isNil(text) || isEmpty(text);

const MainScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});
    const spaceXData = useSelector(state => state.userDetails.spaceXData);
    const dispatch = useDispatch();

    const getSpaceXdata = async () => {
        setIsLoading(true);
        const configurationObject = {
            method: 'get',
            url: `${BASE_URL}/launches`,
        };
        const response = await axios(configurationObject);
        dispatch({
            type: STORE_DATA,
            payload: {
                spaceXData: response.data
            }
        })
        setIsLoading(false);
        return
    }

    const onLogoutPress = () => {
        dispatch({ type: LOGOUT });
        props.navigation.navigate("SignInScreen")
    }

    useEffect(() => {
        if (isEmpty(spaceXData))
            getSpaceXdata();
    }, []);
    const renderModal = () => {
        let missionDetails = isNilOrEmpty(path(["details"], modalData)) ?
            "Details for this mission are not available!" : path(["details"], modalData);
        return <Modal
            visible={modalVisible}
            transparent={true}>
            <Pressable style={styles.modalBg}
                onPress={() => {
                    setModalVisible(false);
                    setModalData({});
                }}>
                <View style={styles.modalView}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                        <Text style={styles.modalHeading}>
                            {`Mission: ${modalData.mission_name}`}
                        </Text >
                        <Text style={styles.modalHeading}>
                            {`${modalData.launch_year}`}
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 20,
                        paddingHorizontal: 20
                    }}>
                        <Text style={styles.RocketText}>{"Rocket Details"}</Text>
                        <Text style={styles.rocketDesc}> {`Rocket Name:${path(["rocket", "rocket_name"], modalData)}`}</Text>
                        <Text style={styles.rocketDesc}> {`Rocket Type:${path(["rocket", "rocket_type"], modalData)}`}</Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        paddingHorizontal: 20
                    }}>
                        <Text style={styles.RocketText}>{"Mission Site"}</Text>
                        <Text style={styles.rocketDesc}> {`${path(["launch_site", "site_name_long"], modalData)}`}</Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        paddingHorizontal: 20
                    }}>
                        <Text style={styles.RocketText}>{"Mission Details"}</Text>
                        <Text style={styles.rocketDesc}> {`${missionDetails}`}</Text>
                    </View>
                </View>
            </Pressable>

        </Modal>
    }

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <MainHeader
                title={'SpaceX'}
                onLogoutPress={onLogoutPress} />
            <MainCard>
                <View>
                    <FlatList
                        style={{ marginHorizontal: 25 }}
                        showsVerticalScrollIndicator={false}
                        data={!isEmpty(spaceXData) && spaceXData}
                        keyExtractor={(item, index) => `${item.flight_number} ${index}`}
                        renderItem={({ item, index }) => {
                            let color = linearColors[index % linearColors.length]
                            return <View>
                                <Pressable
                                    onPress={() => {
                                        setModalVisible(true);
                                        setModalData(item);
                                    }}
                                    style={[styles.dataButton, { borderColor: color }]}>
                                    <Text style={[styles.buttonText, { color: color }]}>
                                        {item.mission_name}
                                    </Text>
                                    <Text style={[styles.yearText, { color: color }]}>
                                        {item.launch_year}
                                    </Text>
                                </Pressable>
                            </View>
                        }}
                    />
                </View>
                {isLoading ? (
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={"#312F57"} />
                    </View>
                ) : null}

            </MainCard>
            {modalVisible && renderModal()}
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
