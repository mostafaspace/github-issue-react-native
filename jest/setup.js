import * as redux from 'react-redux';
const spyDis = jest.spyOn(redux, 'useDispatch');
const spySel = jest.spyOn(redux, 'useSelector');
spyDis.mockReturnValue({});
spySel.mockReturnValue({});

jest.mock('react-native-reanimated', () => {
    const {View} = require('react-native');
    return {
        Value: jest.fn(),
        event: jest.fn(),
        add: jest.fn(),
        eq: jest.fn(),
        set: jest.fn(),
        cond: jest.fn(),
        interpolate: jest.fn(),
        View,
        Extrapolate: {CLAMP: jest.fn()},
        Transition: {
            Together: 'Together',
            Out: 'Out',
            In: 'In',
        },
        Easing: {
            in: jest.fn(),
            out: jest.fn(),
            inOut: jest.fn(),
        },
    };
});

import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => {};
    return Reanimated;
});

import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.useFakeTimers()
