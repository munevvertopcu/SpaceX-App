import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        modalContent: {
            minWidth: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
        },
        button: {
            backgroundColor: "#264061",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            marginTop: 20
        },
        buttonText: {
            color: '#fff',
            fontWeight: "bold"
        }
    }
)