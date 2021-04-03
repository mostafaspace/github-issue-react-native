import React from 'react';
import {Provider} from 'react-redux';
import {render as RNRender} from '@testing-library/react-native';
import {createStore} from 'redux';
import rootReducer from '../App/Reducers/IssuesReducer';

function render(ui, opts) {
    return RNRender(ui, {
        ...opts,
        wrapper: ({children}) => <Provider store={createStore(rootReducer)}>{children}</Provider>,
    });
}

export * from '@testing-library/react-native';
export {render};
