import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '70%',
        height: '70%',
        position: 'relative',
    },
    close: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 50,
        zIndex: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
      color: 'white',
    },
    text: {
        color: '#ffffff',
        marginTop: 10,
    }
});