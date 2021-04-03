import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import InternetError from '../InternetError';
import '@testing-library/jest-native/extend-expect';

afterEach(cleanup);
it('renders component', () => {
    render(<InternetError />);
});
