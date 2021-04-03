import React from 'react';
import {Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {Colors} from '../../Constants';
import PropTypes from 'prop-types';

export const Button = ({text, onPress, containerStyle, isLoading, disabled, testID}) => {
    return (
        <TouchableOpacity
            style={[Styles.container, containerStyle, (isLoading || disabled) && Styles.disabled]}
            disabled={isLoading || disabled}
            onPress={() => onPress && onPress()}
            testID={testID ? testID : 'Button'}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={Colors.grey} style={Styles.indicator} />
            ) : (
                <Text style={Styles.text} numberOfLines={1} testID={'ButtonText'}>
                    {text}
                </Text>
            )}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    containerStyle: PropTypes.object,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};
