import React from 'react';
import {View, BackHandler, Text} from 'react-native';
import Styles from './styles';
import {Actions} from 'react-native-router-flux';
import NetInfo from '@react-native-community/netinfo';

export default function InternetError() {
    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => onBack());

        let unsubscribe = NetInfo.addEventListener((state) => {
            state.isInternetReachable && Actions.currentScene === 'NoInternet' && Actions.pop();
        });

        return function () {
            BackHandler.removeEventListener('hardwareBackPress', onBack);
            unsubscribe();
        };
    }, []);

    function onBack() {
        if (Actions.currentScene === 'NoInternet') {
            return true;
        }
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.errorMsg}>{'No Internet Connection'}</Text>
        </View>
    );
}
