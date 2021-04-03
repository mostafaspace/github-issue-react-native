import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {ErrorModal} from '../ErrorModal';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

afterEach(cleanup);
it('renders component', () => {
    render(<ErrorModal />);
});

it('check if has text', () => {
    const {queryByTestId, getByText} = render(<ErrorModal title={'title text'} />);
    expect(queryByTestId('Modal')).toContainElement(getByText('title text'));
});

it('ErrorModal matches snapshot', () => {
    const tree = renderer.create(<ErrorModal text={'test'} />).toJSON()
    expect(tree).toMatchSnapshot();
});
