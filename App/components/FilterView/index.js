import React, { useState } from "react";
import { Pressable, Text, View, Modal } from "react-native";
import { isEmpty, path, isNil } from "ramda";
import styles from "./styles";
import moment from "moment";
import DatePicker from "react-native-date-picker";
import Icon from 'react-native-vector-icons/Fontisto';
const isNilOrEmpty = text => isNil(text) || isEmpty(text);

const OrView = () => {
    return <View style={styles.orView}>
        <View style={styles.horizontalLine} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.horizontalLine} />
    </View>
}



const FilterView = ({
    filter,
    getPastData,
    getUpcomingData,
    getSpaceXdata,
    getDataWithDates
}) => {

    const [dobModalVisible, setDobModalVisible] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dateError, setDateError] = useState('');
    const [isStartDate, setIsStartDate] = useState(false)

    const onDOBDatePicked = (date) => {
        const newDate = moment(date).format("YYYY-MM-DD");
        if (isStartDate) {
            setStartDate(newDate);
        } else {
            setEndDate(newDate);
        }
    }

    const handledateButton = () => {
        if (!isEmpty(endDate) && !isEmpty(startDate)) {
            filter(false);
            getDataWithDates(startDate, endDate);
        } else {

            if (isEmpty(endDate) && isEmpty(startDate)) {
                setDateError("Please select dates");
            } else if (isEmpty(endDate)) {
                setDateError("Please select end date");
            } else if (isEmpty(startDate)) {
                setDateError("Please select start date");
            }
        }
    }

    const dobModal = () => {
        const date = isStartDate ? startDate : endDate;
        const minimumDate = !isEmpty(startDate) && !isStartDate ? moment(startDate, "YYYY-MM-DD").toDate() : moment().add(-20, "y").toDate();
        const maximumDate = !isEmpty(endDate) && isStartDate ? moment(endDate, "YYYY-MM-DD").toDate() : moment().toDate();

        return (
            <Modal
                visible={dobModalVisible}
                transparent={true}
            >
                <View style={styles.modalContainerStyle}>
                    <View style={styles.modalWrapperStyle}>
                        <View style={styles.modalDoneButtonContainerStyle}>
                            <Pressable
                                style={styles.modalDoneButtonStyle}
                                onPress={() => {
                                    setDobModalVisible(false);
                                }}
                            >
                                <Text style={styles.modalDoneTextStyle}>
                                    {"Done"}
                                </Text>
                            </Pressable>
                        </View>
                        <DatePicker
                            mode="date"
                            date={
                                new Date(
                                    (!isEmpty(date)
                                        ? date
                                        : moment().add(0, "y").format("DD/MM/YYYY")
                                    )
                                        .split("/")
                                        .reverse()
                                        .join("/")
                                )
                            }
                            onDateChange={date => {
                                onDOBDatePicked(date);
                            }}
                            minimumDate={minimumDate}
                            maximumDate={maximumDate}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
    return <View >
        <Pressable
            onPress={() => {
                filter(false);
                getPastData();
            }}
            style={styles.dataButton}>
            <Text style={styles.buttonText}>Get Past Missions</Text>
        </Pressable>
        <OrView />
        <Pressable
            onPress={() => {
                filter(false);
                getUpcomingData();
            }}
            style={styles.dataButton}>
            <Text style={styles.buttonText}>Get Upcoming Missions</Text>
        </Pressable>
        <OrView />
        <Pressable
            onPress={() => {
                filter(false);
                getSpaceXdata();
            }}
            style={styles.dataButton}>
            <Text style={styles.buttonText}>Get All Missions</Text>
        </Pressable>
        <OrView />
        <View style={styles.dateView}>
            <View>
                <Text style={styles.headingText}>Start Date</Text>
                <Pressable
                    onPress={() => {
                        setDobModalVisible(true);
                        setDateError('');
                        setIsStartDate(true);
                    }}
                    style={[styles.dobButton]}>
                    <Text style={isEmpty(startDate) ? styles.dobEmptytext : styles.dobText}>{isEmpty(startDate) ? "YYYY-MM-DD" : startDate}</Text>
                    <Icon
                        name="date"
                        size={20}
                        color="#636189"
                    />
                </Pressable>
            </View>
            <View>
                <Text style={styles.headingText}>End Date</Text>
                <Pressable
                    onPress={() => {
                        setDobModalVisible(true);
                        setDateError('');
                        setIsStartDate(false);
                    }}
                    style={[styles.dobButton]}>
                    <Text style={isEmpty(endDate) ? styles.dobEmptytext : styles.dobText}>{isEmpty(endDate) ? "YYYY-MM-DD" : endDate}</Text>
                    <Icon
                        name="date"
                        size={20}
                        color="#636189"
                    />
                </Pressable>
            </View>
        </View>
        {!isEmpty(dateError) && <Text style={styles.errorText}>{dateError}</Text>}
        <Pressable
            onPress={handledateButton}
            style={[styles.dataButton, { marginTop: 20 }]}>
            <Text style={styles.buttonText}>Get Missions from Selected Dates</Text>
        </Pressable>
        {dobModal()}
    </View>
}

export default FilterView;