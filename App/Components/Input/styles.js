import {StyleSheet, I18nManager} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e8ea',
        borderRadius: 16,
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 16,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    searchInput: {
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        color: '#222',
        paddingVertical: 16,
    },
    searchIcon: {
        marginVertical: 8,
        marginEnd: 4,
        width: 30,
        height: 30,
    },
    error: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'flex-start',
        marginHorizontal: 8,
        marginBottom: 4,
        lineHeight: 14,
        paddingTop: 1,
        textAlign: 'left',
    },
});
