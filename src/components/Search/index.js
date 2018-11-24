import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import RepoList from '../RepoList';
import WebViewModal from '../WebViewModal';
import SortTools from '../SortTools';
import { fetchReposByQuery, loadMoreRepos } from '../../actions/repo';
import { logOut } from '../../actions/user';

type State = {
    sort: string,
    query: string,
    page: number,
    currentRepo: {},
};

class Search extends Component<State> {
    state = {
        sort: null,
        query: null,
        page: 1,
        currentRepo: null,
    };

    onRepoPress = (currentRepo) => this.setState({ currentRepo });

    onClearRepo = () => {
        this.setState({ currentRepo: null });
    };

    onSortHandler = (sort) => this.setState({ sort });

    onSearchChange = (event) => {
        const query = event.nativeEvent.text;
        const { sort, page } = this.state;

        this.props.fetchReposByQuery({ q: query, sort, page });
        this.setState({ query });
    };

    loadMoreRepos = () => {
        const { sort, query: q, page } = this.state;
        const increasedPage = page + 1;

        this.props.loadMoreRepos({ sort, q, page: increasedPage});
        this.setState({ page: increasedPage });
    };

    logOut = async () => {
        const { logOut, navigation } = this.props;

        await logOut();
        navigation.push('SighIn');
    };

    render() {
        const { currentRepo, query } = this.state;
        const { isLoading, repos, errorMessage, networkConnection } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.logOut}>
                        <Text style={styles.logOutButton}>Log Out</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>You can try to find some GitHub's repos</Text>
                    <TextInput
                        value={query}
                        autoCapitalize='none'
                        onChange={this.onSearchChange}
                        style={styles.searchInput}
                    />
                </View>
                <SortTools onSortHandler={this.onSortHandler}/>
                <WebViewModal data={currentRepo} closeHandler={this.onClearRepo}/>
                <RepoList
                    items={repos}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    onRepoPress={this.onRepoPress}
                    loadMoreRepos={this.loadMoreRepos}
                    networkConnection={networkConnection}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ repo: { isLoading, errorMessage, repos, networkConnection } }) => ({
    isLoading,
    errorMessage,
    repos,
    networkConnection,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReposByQuery: (config) => {
            dispatch(fetchReposByQuery(config));
        },
        loadMoreRepos: (config) => {
          dispatch(loadMoreRepos(config));
        },
        logOut: () => {
            dispatch(logOut());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);