import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 16,
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    contentContainer: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
    },
    titleText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
    },
    titleIcon: {
        fontSize: 24,
        color: 'green',
        marginEnd: 8,
        marginStart: 8,
    },
    flatContainer: {
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    labelContainer: {
        flex: 1,
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginEnd: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 10,
    },
    author: {
        fontSize: 12,
        paddingHorizontal: 18,
    },
    assigneeImg: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginEnd: 4,
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    commentsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    commentText: {
        fontSize: 12,
        paddingEnd: 4,
        lineHeight: 12.4,
    },
    commentIcon: {
        fontSize: 12,
        paddingEnd: 4,
    },
    assigneeContainer: {
        fontSize: 12,
        paddingHorizontal: 16,
    },
});
