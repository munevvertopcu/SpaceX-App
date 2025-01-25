import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        inputContainer: {
            flexDirection: 'row',
            position: "relative",
            marginVertical: 10
        },
        input: {
            height: 40,
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderRadius: 10,
            borderColor: '#36445B',
            padding: 5,
            color: "#fff",
            flex: 1
        },
        icon: {
            position: "absolute",
            right: 7,
            alignSelf: "center"
        }
    }
)