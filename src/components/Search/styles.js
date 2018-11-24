import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'grey'
    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    searchInput: {
        height: 40,
        borderColor: 'darkgray',
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
    },
    tool: {
        flex: 1,
        flexDirection: 'row',
    },
    checkBox: {
        backgroundColor: 'grey',
        borderColor: 'grey',
    },
    checkBoxText: {
        color: 'white',
    },
    logOutButton: {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
});