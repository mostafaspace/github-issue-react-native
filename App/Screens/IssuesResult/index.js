import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Indicator} from '../../Components/Indicator';
import {IssueCard} from '../../Components/IssueCard';
import {NoRecord} from '../../Components/NoRecord';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Issues} from '../../Controllers';
import {Actions} from 'react-native-router-flux';
import {useSelector, useDispatch} from 'react-redux';
import {APPEND_TO_LIST, LAST_PAGE, LOAD_MORE} from '../../Actions/IssuesActions';
import Styles from './styles';

export default function IssuesResult() {
    const {IssuesList, IsLoading, IsLoadingMore, Organization, Repo, Page, LastPage} = useSelector((state) => state);
    const dispatch = useDispatch();

    function loadMore() {
        if (!LastPage) {
            dispatch({type: LOAD_MORE});
            Issues({Organization, Repo, Page}).then((newList) => {
                if (newList && newList.length > 0) {
                    dispatch({type: APPEND_TO_LIST, payload: newList});
                } else {
                    dispatch({type: LAST_PAGE});
                }
            });
        }
    }

    return (
        <View style={Styles.container}>
            {IsLoading ? (
                <Indicator />
            ) : IssuesList && IssuesList.length > 0 ? (
                <FlatList
                    data={IssuesList}
                    renderItem={({item, index}) => <IssueCard key={'issue' + index} issue={item} />}
                    contentContainerStyle={Styles.flatContainerStyle}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={() =>
                        IsLoadingMore ? (
                            <View style={Styles.moreLoad}>
                                <Indicator size={'small'} />
                            </View>
                        ) : (
                            <View />
                        )
                    }
                />
            ) : (
                <NoRecord text={'No Issues Found'} />
            )}
        </View>
    );
}

IssuesResult.navigationOptions = () => {
    return {
        headerLeft: () => (
            <TouchableOpacity onPress={() => Actions.pop()}>
                <Icon name={'keyboard-backspace'} style={Styles.backIcon} />
            </TouchableOpacity>
        ),
        headerTitle: () => <Text style={Styles.headerTitle}>{'Issues List'}</Text>,
    };
};
