import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {IssueCard} from '../IssueCard';
import renderer from 'react-test-renderer';

const obj = {
    pull_request: null,
    state: 'open',
    labels: [],
    title: 'title',
    closed_at: null,
    created_at: 0,
    number: 1,
    user: {login: 'name'},
    comments: [],
    assignees: [],
}

afterEach(cleanup);
it('renders component', () => {
    render(<IssueCard issue={obj} />);
});

it('IssueCard matches snapshot', () => {
    const tree = renderer.create(<IssueCard issue={obj} />).toJSON()
    expect(tree).toMatchSnapshot();
});
