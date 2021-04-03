import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {Button} from '../Button';

afterEach(cleanup)
it('test click and and check text', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<Button text={'click here'} onPress={onPressMock} />);

    fireEvent.press(getByText('click here'));
    expect(onPressMock).toHaveBeenCalled();
});

it('test to check if disabled', () => {
    const {getByTestId} = render(<Button text={'click here'} disabled />);
    expect(getByTestId('Button')).toBeDisabled();
});

it('Button matches snapshot', () => {
    const onPressMock = jest.fn();
    const tree = renderer.create(<Button text={'click here'} onPress={onPressMock} />).toJSON()
    expect(tree).toMatchSnapshot();
});
