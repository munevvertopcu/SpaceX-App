import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flex: 1
        },
        imageContainer: {
            flex: 1,
            backgroundColor: "black",
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20
        },
        spacexLogo: {
            marginLeft: 20,
            marginBottom: 20
        },
        text: {
            color: "#fff",
            textAlign: 'center',
            fontSize: 16,
            marginTop: 20
        },
        buttonText: {
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 20,
            textDecorationLine: "underline"
        }
    }
);