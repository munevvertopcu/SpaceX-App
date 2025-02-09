import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Profile.style';
import { useGet } from '../../hooks/useGet';
import CommonButton from '../../components/CommonButton';
import { AuthContext } from '../../contexts/AuthContext';
import CommonAlert from '../../components/CommonAlert';

function Profile() {

    const [messageAlertVisible, setMessageAlertVisible] = useState({
        visible: false,
        message: "",
    });

    const { data } = useGet("auth/me", []);

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        setMessageAlertVisible({
            visible: true,
            message: "Are you sure you want to log out?"
        })
    };

    const confirmLogout = () => {
        logout();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.email}>
                <Text style={styles.text}>Email: </Text>
                {data.email}
            </Text>
            <CommonButton title="Logout" onPress={handleLogout} />
            <CommonAlert alertVisible={messageAlertVisible} setAlertVisible={setMessageAlertVisible} onConfirm={confirmLogout} />
        </View>
    );
};

export default Profile;