import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import IssuesResult from '../IssuesResult';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

afterEach(cleanup);
it('renders component', () => {
    render(<IssuesResult />);
});

it('IssuesResult matches snapshot', () => {
    const tree = renderer.create(<IssuesResult />).toJSON();
    expect(tree).toMatchSnapshot();
});
