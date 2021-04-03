import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

// screens identified by the router
import {HomeScreen, IssuesResult, InternetError} from '../Screens';

export default function NavigationRouter() {
    return (
        <Router>
            <Stack key="root" gesturesEnabled={false}>
                <Scene key="Home" component={HomeScreen} initial />
                <Scene key="IssuesResult" component={IssuesResult} />
                <Scene key="NoInternet" component={InternetError} hideNavBar />
            </Stack>
        </Router>
    );
}
