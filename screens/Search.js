import React, { Component, createRef } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    SafeAreaView,
} from 'react-native';

// Constants
import { images } from '../constants';

// Components
import Avatar from '../components/Avatar';
import MenuIcon from '../components/MenuIcon';
import FilterButton from '../components/FilterButton';
import SearchIcon from '../components/SearchIcon';
import ClearIcon from '../components/ClearIcon';
import Separator from '../components/Separator';
import JobListItem from '../components/JobListItem';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: '',
            jobs: null,
            isLoading: true,
            modalIsActive: false,
        };

        this.searchInputRef = createRef();
    }

    componentDidMount = async () => {
        // Fetch jobs from Github Jobs API on component mount
        this.getJobs();
    };

    getJobs = async (searchParam = '') => {
        // Fetch jobs from Github Jobs API
        this.setState({ isLoading: true });
        try {
            let url = 'https://jobs.github.com/positions.json?markdown=true';
            if (searchParam) {
                url = `https://jobs.github.com/positions.json?markdown=true&search=${searchParam}`;
            }
            const response = await fetch(url);
            const jobs = await response.json();
            this.setState({ jobs, isLoading: false });
        } catch (error) {
            console.error(error);
        }
    };

    handleSearchInputChange = async (e) => {
        const searchInput = e.nativeEvent.text.trim();
        // Prevent fetching data from API when input is only whitespace
        if (searchInput !== '') {
            this.setState({ searchInput }, () => {
                this.searchInputRef.current.setNativeProps({
                    searchInput: this.state.searchInput,
                });
                this.getJobs(this.state.searchInput);
            });
        } else if (this.state.searchInput !== '') {
            this.setState({ searchInput: '' });
            this.getJobs();
        }
    };

    clearSearchInput = () => {
        // Prevent fetching data from API when spamming the clear button
        if (this.state.searchInput !== '') {
            this.setState({ searchInput: '' }, () => {
                this.searchInputRef.current.clear();
                this.getJobs();
            });
        }
    };

    render() {
        const headerComponent = () => (
            <>
                <View style={styles.header}>
                    <MenuIcon />
                    <Avatar source={images.userAvatar} />
                </View>
                <Text style={styles.largeTitle}>Search for jobs</Text>
                <View style={styles.searchRow}>
                    <View style={styles.searchInputContainer}>
                        <SearchIcon />
                        <TextInput
                            ref={this.searchInputRef}
                            onEndEditing={this.handleSearchInputChange}
                            style={styles.searchInput}
                            placeholder="Search"
                            defaultValue={this.state.searchInput}
                        />
                        <ClearIcon clearSearchInput={this.clearSearchInput} />
                    </View>
                    <FilterButton />
                </View>
                <Separator />
                <Text style={styles.resultsHeader}>
                    {this.state.searchInput && 'Results for '}
                    {this.state.searchInput && (
                        <Text style={styles.searchInputResult}>
                            {this.state.searchInput}
                        </Text>
                    )}
                    {!this.state.searchInput && 'Recent Jobs'}
                </Text>
                {this.state.isLoading && <Text>Loading...</Text>}
            </>
        );

        const emptyComponent = () => (
            <View style={styles.empty}>
                {/* Show text only when not loading */}
                {!this.state.isLoading && (
                    <Text style={styles.emptyText}>No result.</Text>
                )}
            </View>
        );

        const footerComponent = () => (
            <View style={styles.footer}>
                <Text style={styles.footerText}>2020 &copy; Amiel Filarca</Text>
            </View>
        );

        const listItemComponent = (item) => {
            // Pass Navigation to each FlatList item
            return (
                <JobListItem item={item} navigation={this.props.navigation} />
            );
        };

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.list}
                    initialNumToRender={5}
                    ListHeaderComponent={headerComponent}
                    ListEmptyComponent={emptyComponent}
                    ListFooterComponent={footerComponent}
                    data={this.state.jobs}
                    renderItem={({ item }) => listItemComponent(item)}
                    keyExtractor={(job) => job.id}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
    },
    largeTitle: {
        fontSize: 28,
        fontWeight: '700',
        marginVertical: 12,
        color: '#364961',
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e9ee',
        borderRadius: 15,
        marginEnd: 12,
        paddingHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        height: 42,
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: '#41536a',
        fontSize: 16,
        fontWeight: '400',
    },
    resultsHeader: {
        marginVertical: 12,
        color: '#44556c',
        fontWeight: '400',
    },
    searchInputResult: {
        color: '#364860',
        fontWeight: '700',
    },
    list: {
        flex: 1,
    },
    empty: {
        flex: 1,
    },
    emptyText: {
        textAlign: 'center',
        color: '#96a3b1',
        fontSize: 14,
        fontWeight: '700',
    },
    footer: {
        paddingTop: 12,
        paddingBottom: 24,
        alignItems: 'center',
    },
    footerText: {
        marginTop: 24,
        textTransform: 'uppercase',
        color: '#7c8c9d',
        fontSize: 10,
        fontWeight: '700',
    },
});
