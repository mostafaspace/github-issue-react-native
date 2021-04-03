import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {NoRecord} from '../NoRecord';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

afterEach(cleanup);
it('renders component', () => {
    render(<NoRecord text={'test'} />);
});

it('check if has text', () => {
    const {queryByTestId, getByText} = render(<NoRecord text={'text'} />);
    expect(queryByTestId('NoRecord')).toContainElement(getByText('text'));
});

it('NoRecord matches snapshot', () => {
    const tree = renderer.create(<NoRecord text={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
});
