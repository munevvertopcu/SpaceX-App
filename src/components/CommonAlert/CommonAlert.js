import React from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import styles from './CommonAlert.style';

export default function CommonAlert({ alertVisible, setAlertVisible, onConfirm }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={alertVisible.visible}
            onRequestClose={setAlertVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>{alertVisible.message.toString()}</Text>
                    <TouchableOpacity onPress={() => {
                        setAlertVisible({
                            visible: false,
                            message: ""
                        });
                        if (onConfirm) onConfirm();
                    }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText} >OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}