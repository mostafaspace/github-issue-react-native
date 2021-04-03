import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants';

export default StyleSheet.create({
    container: {
        margin: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    text: {
        flex: 1,
        color: Colors.white,
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    grayText: {
        color: Colors.grey,
    },
    disabled: {
        backgroundColor: Colors.lightGrey,
    },
    indicator: {
        flex: 1,
    },
});
