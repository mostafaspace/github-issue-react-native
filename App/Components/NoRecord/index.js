import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

export function NoRecord({containerStyle, text}) {
    return (
        <View style={[Styles.emptyListContainer, containerStyle]} testID={'NoRecord'}>
            <Text style={Styles.emptyListText}>{text}</Text>
        </View>
    );
}

NoRecord.propTypes = {
    containerStyle: PropTypes.object,
    text: PropTypes.string,
};
