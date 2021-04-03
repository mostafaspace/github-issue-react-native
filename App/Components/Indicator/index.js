import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import {Colors} from '../../Constants';

export const Indicator = ({size, containerStyle}) => {
    return (
        <ActivityIndicator
            size={size ? size : 'large'}
            color={Colors.grey}
            style={[Styles.indicator, containerStyle]}
            testID={'Indicator'}
        />
    );
};

Indicator.propTypes = {
    size: PropTypes.string,
    containerStyle: PropTypes.object,
};
