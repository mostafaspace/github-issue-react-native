import React from 'react';
import {TextInput, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Constants';

export const Input = ({onChangeText, value, label, iconName, error, testID}) => {
    return (
        <View style={Styles.container} testID={testID}>
            <View style={Styles.searchSection}>
                {iconName && <Icon name={iconName} size={28} color={Colors.grey} style={Styles.searchIcon} />}
                <TextInput
                    style={Styles.searchInput}
                    placeholder={label}
                    value={value + ''}
                    onChangeText={onChangeText}
                    underlineColorAndroid={'transparent'}
                    testID={'Input'}
                />
            </View>
            {error !== '' && <Text style={Styles.error}>{error}</Text>}
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    iconName: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
};
