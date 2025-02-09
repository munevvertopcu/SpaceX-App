import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create(
    {
        image: {
            width: "100%",
            height: Dimensions.get("window").height * 0.2,
            marginBottom: 30,
            justifyContent: "flex-end"
        },
        title: {
            color: "#ffff",
            fontWeight: "bold",
            fontSize: 16,
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingLeft: 10
        },
        buttonText: {
            color: "#fff",
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingLeft: 10,
            marginBottom: 10
        }
    }
);