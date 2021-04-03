import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(20, 154, 222,0.8)',
    },
    popUpContainer: {
        width: '85%',
        height: null,
        backgroundColor: 'white',
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerContainer: {
        padding: 8,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    headerContainerText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.grey,
    },
    messageContainer: {
        margin: 16,
        alignItems: 'center',
    },
    messageLabel: {
        lineHeight: 24,
        marginHorizontal: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.grey,
    },
    buttonContainer: {
        backgroundColor: Colors.lightGrey,
        width: '100%',
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    buttonText: {
        color: Colors.grey,
        fontWeight: 'bold',
    },
});
