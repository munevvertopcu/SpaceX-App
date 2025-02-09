import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#020223'
        },
        image: {
            width: "100%",
            height: 200,
            marginBottom: 30
        },
        title: {
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 17,
            marginBottom: 10
        },
        summary: {
            color: "#fff",
            fontSize: 15,
            marginHorizontal: 20
        },
        date: {
            color: "#fff",
            textAlign: "right",
            marginRight: 10,
            marginTop: 40
        },
        text: {
            fontWeight: "bold"
        },
        backButton: {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 40
        }
    }
);