import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import Home from '../Home';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

afterEach(cleanup);
it('renders component', () => {
    render(<Home />);
});

test('check button text', () => {
    const {getByTestId} = render(<Home />);

    //check if button have the correct text
    expect(getByTestId('Submit')).toHaveTextContent('Find');
});

test('test validations', () => {
    const {getByTestId, queryByText} = render(<Home />);

    //check if both inputs are empty
    fireEvent(getByTestId('Org'), 'onChangeText', '');
    fireEvent(getByTestId('Repo'), 'onChangeText', '');
    fireEvent.press(getByTestId('Submit'));
    expect(queryByText('Organization is Required')).toBeDefined();
    expect(queryByText('Repository is Required')).toBeDefined();

    //check if one input is empty
    fireEvent(getByTestId('Org'), 'onChangeText', 'Microsoft');
    fireEvent(getByTestId('Repo'), 'onChangeText', '');
    fireEvent.press(getByTestId('Submit'));
    expect(queryByText('Organization is Required')).toBeNull();
    expect(queryByText('Repository is Required')).toBeDefined();

    //check if one input is empty
    fireEvent(getByTestId('Org'), 'onChangeText', '');
    fireEvent(getByTestId('Repo'), 'onChangeText', 'typescript');
    fireEvent.press(getByTestId('Submit'));
    expect(queryByText('Organization is Required')).toBeDefined();
    expect(queryByText('Repository is Required')).toBeNull();

    //check if both input are full and modal is shown
    fireEvent(getByTestId('Org'), 'onChangeText', 'Microsoft');
    fireEvent(getByTestId('Repo'), 'onChangeText', 'typescript');
    fireEvent.press(getByTestId('Submit'));
    expect(queryByText('Organization is Required')).toBeNull();
    expect(queryByText('Repository is Required')).toBeNull();
});

it('Home matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});
