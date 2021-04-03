import React from 'react';
import {Modal, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Button} from '../Button';
import Styles from './styles';
import PropTypes from 'prop-types';

export const ErrorModal = ({isVisible, hide, title, onPressOK, testID}) => {
    return (
        <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={() => hide()} testID={testID ? testID : 'Modal'}>
            <TouchableWithoutFeedback onPress={() => hide()}>
                <View style={Styles.container}>
                    <View style={Styles.popUpContainer}>
                        <View style={Styles.headerContainer}>
                            <Text style={Styles.headerContainerText}>{'Error'}</Text>
                        </View>

                        <View style={Styles.messageContainer}>
                            <Text style={Styles.messageLabel}>{!title ? 'Something Went Wrong' : title}</Text>
                        </View>
                        <Button
                            text={'Ok'}
                            containerStyle={Styles.buttonContainer}
                            textStyle={Styles.buttonText}
                            onPress={() => {
                                hide();
                                onPressOK && onPressOK();
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

ErrorModal.propTypes = {
    title: PropTypes.string,
    isVisible: PropTypes.bool,
    onPressOK: PropTypes.func,
    hide: PropTypes.func,
};
