import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    innerBox: {
        width: '80%',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
    },
    inputName: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        height: 40,
        backgroundColor: 'red',
        marginTop: 20,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        lineHeight: 40,

    },
    disabled: {
        height: 40,
        backgroundColor: 'red',
        marginTop: 20,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        lineHeight: 40,
        opacity: .5,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    }
});