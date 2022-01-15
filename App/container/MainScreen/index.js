import React, { useState, useEffect } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View, ActivityIndicator, Modal } from "react-native";
import styles from "./styles";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import MainHeader from "../../components/MainHeader";
import MainCard from "../../components/MainCard";
import axios from 'axios';
import { BASE_URL } from "../../Config";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, STORE_DATA, EMPTY_DATA } from "../../constants";
import { isEmpty } from "ramda";
import DetailsModal from "../../components/DetailsModal";
import FilterView from "../../components/FilterView";

const linearColors = [
    "#EC7561", "#D16C65",
    "#44478D", "#4397CE",
    "#E33D24", "#D16C65",
    "#364261", "#383571"
];

const MainScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});
    const [filterPressed, setFilterPressed] = useState(false)
    const spaceXData = useSelector(state => state.userDetails.spaceXData);
    const dispatch = useDispatch();

    const emptyData = () => {
        dispatch({
            type: EMPTY_DATA
        })
    }

    const storeData = (data) => {
        dispatch({
            type: STORE_DATA,
            payload: {
                spaceXData: data
            }
        })
    }
    const getSpaceXdata = async () => {
        setIsLoading(true);
        emptyData();
        const configurationObject = {
            method: 'get',
            url: `${BASE_URL}/launches`,
        };
        const response = await axios(configurationObject);
        storeData(response.data);
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

    const getPastData = async () => {
        setIsLoading(true);
        emptyData();
        const configurationObject = {
            method: 'get',
            url: `${BASE_URL}/launches/past`,
        };
        const response = await axios(configurationObject);
        storeData(response.data);
        setIsLoading(false);
        return
    };

    const getUpcomingData = async () => {
        setIsLoading(true);
        emptyData();
        const configurationObject = {
            method: 'get',
            url: `${BASE_URL}/launches/upcoming`,
        };
        const response = await axios(configurationObject);
        storeData(response.data);
        setIsLoading(false);
        return
    }

    const getDataWithDates = async (startDate, endDate) => {
        setIsLoading(true);
        emptyData();
        const configurationObject = {
            method: 'get',
            url: `${BASE_URL}/launches`,
            params: {
                start: startDate,
                end: endDate
            },
        };
        const response = await axios(configurationObject);
        storeData(response.data);
        setIsLoading(false);
        return
    }
    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <MainHeader
                title={'SpaceX'}
                onLogoutPress={onLogoutPress}
                setFilterPressed={setFilterPressed} />
            <MainCard>
                {!filterPressed ? <View>
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
                </View> : <FilterView
                    filter={setFilterPressed}
                    getPastData={getPastData}
                    getUpcomingData={getUpcomingData}
                    getSpaceXdata={getSpaceXdata}
                    getDataWithDates={getDataWithDates} />}
                {isLoading ? (
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={"#312F57"} />
                    </View>
                ) : null}

            </MainCard>
            {modalVisible && <DetailsModal
                modalData={modalData}
                setModalData={setModalData}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />}
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
