import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import moment from 'moment';
import {getContrast} from '../../Helpers';
import Icon from 'react-native-vector-icons/Octicons';

export function IssueCard({issue}) {
    return (
        <View style={Styles.container} testID={'IssueCard'}>
            <View style={Styles.contentContainer}>
                {issue.pull_request ? (
                    <Icon name={'git-pull-request'} style={Styles.titleIcon} />
                ) : (
                    issue.state === 'open' && <Icon name={'issue-opened'} style={Styles.titleIcon} />
                )}
                <Text style={Styles.titleText}>{issue.title}</Text>
            </View>
            {issue.labels && issue.labels.length > 0 && (
                <FlatList
                    data={issue.labels}
                    renderItem={({item, index}) =>
                        item.name && (
                            <View style={[Styles.labelContainer, {backgroundColor: '#' + item.color}]}>
                                <Text
                                    key={`label${index}`}
                                    style={[
                                        Styles.labelText,
                                        {
                                            color: getContrast('#' + item.color),
                                        },
                                    ]}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        )
                    }
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    contentContainerStyle={Styles.flatContainer}
                    showsHorizontalScrollIndicator={false}
                />
            )}
            {issue.closed_at ? (
                <Text style={Styles.author}>{`#${issue.number} closed ${moment(issue.closed_at).fromNow()} by ${issue.user.login}`}</Text>
            ) : (
                <Text style={Styles.author}>{`#${issue.number} opened ${moment(issue.created_at).fromNow()} by ${issue.user.login}`}</Text>
            )}

            <View style={Styles.footerContainer}>
                {issue.assignees && issue.assignees.length > 0 ? (
                    <FlatList
                        data={issue.assignees}
                        renderItem={({item, index}) =>
                            item.avatar_url && <Image source={{uri: item.avatar_url}} key={`assignee${index}`} style={Styles.assigneeImg} />
                        }
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        contentContainerStyle={Styles.assigneeContainer}
                        showsHorizontalScrollIndicator={false}
                    />
                ) : (
                    <View />
                )}
                {issue.comments ? (
                    <View style={Styles.commentsContainer}>
                        <Text style={Styles.commentText}>{issue.comments}</Text>
                        <Icon name={'comment'} style={Styles.commentIcon} />
                    </View>
                ) : null}
            </View>
        </View>
    );
}

IssueCard.propTypes = {
    issue: PropTypes.object.isRequired,
};
