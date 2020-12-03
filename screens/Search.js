import React, { Component, createRef } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { images } from '../constants';
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
            let url = 'https://jobs.github.com/positions.json';
            if (searchParam) {
                url = `https://jobs.github.com/positions.json?search=${searchParam}`;
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
        if (this.state.searchInput !== '') {
            this.setState({ searchInput: '' }, () => {
                this.searchInputRef.current.clear();
                this.getJobs();
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
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
                    {!this.state.searchInput && 'Popular Jobs'}
                </Text>
                {this.state.isLoading && <Text>Loading...</Text>}
                <FlatList
                    data={this.state.jobs}
                    renderItem={JobListItem}
                    keyExtractor={(job) => job.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: 'white',
        minHeight: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
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
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: '#41536a',
        fontSize: 16,
        fontWeight: '600',
    },
    resultsHeader: {
        marginVertical: 12,
        color: '#44556c',
        fontWeight: '600',
    },
    searchInputResult: {
        color: '#364860',
        fontWeight: '700',
    },
});
