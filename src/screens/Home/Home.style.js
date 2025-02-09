import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#020223'
        },
        header: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            marginTop: 30,
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        image: {
            width: "100%",
            height: Dimensions.get("window").height * 0.3
        },
        title: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20
        },
        newsContainer: {
            marginTop: 20,
            flex: 1,
            marginHorizontal: 30,
            marginBottom: 35
        }
    }
);