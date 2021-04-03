import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Issues} from '../../Controllers';
import {Input} from '../../Components/Input';
import {Button} from '../../Components/Button';
import {ErrorModal} from '../../Components/ErrorModal';
import {useFormValidation} from '../../Helpers';
import {Images} from '../../Resources';
import validations from '../../Helpers/validations';
import {useDispatch} from 'react-redux';
import {POPULATE_LIST} from '../../Actions/IssuesActions';
import Styles from './styles';

const initState = {
    Organization: '',
    Repo: '',
    Page: 1,
};
export default function HomeScreen() {
    const dispatch = useDispatch();
    const {values, errors, handleChange, handleSubmit, isSubmitting, setSubmitting, showModal, modalValues} = useFormValidation(
        initState,
        validations,
        search,
    );

    async function search() {
        Issues(values, showModal, setSubmitting).then((response) => {
            if (response) {
                dispatch({type: POPULATE_LIST, payload: {response, values}});
                Actions.IssuesResult();
            }
        });
    }

    return (
        <ScrollView>
            <View style={Styles.container}>
                <Image source={Images.apc} style={Styles.apcImage} />
                <Input
                    label={'Organization'}
                    iconName={'md-logo-github'}
                    error={errors.Organization}
                    value={values.Organization}
                    maxLength={6}
                    onChangeText={(value) => handleChange('Organization', value)}
                    testID={'Org'}
                />
                <Input
                    label={'Repository'}
                    iconName={'md-git-merge-sharp'}
                    error={errors.Repo}
                    value={values.Repo}
                    maxLength={6}
                    onChangeText={(value) => handleChange('Repo', value)}
                    testID={'Repo'}
                />
                <Button onPress={handleSubmit} isLoading={isSubmitting} text={'Find'} testID={'Submit'} />
                <ErrorModal isVisible={modalValues.show} title={modalValues.text} hide={() => showModal(false, '')} testID={'ErrorModal'} />
            </View>
        </ScrollView>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        headerTitle: () => <Text style={Styles.headerTitle}>{'GitHub Issues'}</Text>,
    };
};
