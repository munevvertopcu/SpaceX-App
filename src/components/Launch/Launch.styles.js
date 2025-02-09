import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create(
    {
        image: {
            width: "100%",
            height: Dimensions.get("window").height * 0.25,
            marginBottom: 30
        },
        title: {
            color: '#fff',
            fontWeight: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            paddingLeft: 10,
            paddingTop: 5
        }
    }
);