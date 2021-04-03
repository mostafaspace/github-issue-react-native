import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {Indicator} from '../Indicator';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

afterEach(cleanup);
it('renders component', () => {
    render(<Indicator />);
});

it('Indicator matches snapshot', () => {
    const tree = renderer.create(<Indicator text={'test'} />).toJSON()
    expect(tree).toMatchSnapshot();
});
