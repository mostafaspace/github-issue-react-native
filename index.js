/**
 * @format
 */

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './App/Reducers/IssuesReducer';
LogBox.ignoreAllLogs();

const AppContainer = () => (
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>
);
AppRegistry.registerComponent(appName, () => AppContainer);
