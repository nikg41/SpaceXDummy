import React from "react";
import { Pressable, Text, View, Modal } from "react-native";
import { isEmpty, path, isNil } from "ramda";
import styles from "./styles";
const isNilOrEmpty = text => isNil(text) || isEmpty(text);

const DetailsModal = (props) => {
    const modalData = props.modalData
    let missionDetails = isNilOrEmpty(path(["details"], modalData)) ?
        "Details for this mission are not available!" : path(["details"], modalData);
    return <Modal
        visible={props.modalVisible}
        transparent={true}>
        <Pressable style={styles.modalBg}
            onPress={() => {
                props.setModalVisible(false);
                props.setModalData({});
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

export default DetailsModal;