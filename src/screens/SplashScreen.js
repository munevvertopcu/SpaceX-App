import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export function SplashScreen() {
    return (
        <ImageBackground
            source={require('../../assets/image.jpg')}
            style={styles.container}
            resizeMode='stretch'
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});