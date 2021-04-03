import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import {Input} from '../Input';
import renderer from 'react-test-renderer';

afterEach(cleanup);
it('renders component', () => {
    render(<Input onChangeText={() => {}} />);
});

test('test onChangeText', () => {
    const onEventMock = jest.fn();
    const {getByTestId} = render(<Input onChangeText={onEventMock} />);

    fireEvent(getByTestId('Input'), 'onChangeText', 'test text');
    expect(onEventMock).toHaveBeenCalledWith('test text');
});

it('Button matches snapshot', () => {
    const onEventMock = jest.fn();
    const tree = renderer.create(<Input onChangeText={onEventMock} />).toJSON()
    expect(tree).toMatchSnapshot();
});
