import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { icons } from '../constants';

const SearchIcon = () => {
    return <Image style={styles.icon} source={icons.search} />;
};

export default SearchIcon;

const styles = StyleSheet.create({
    icon: {
        width: 18,
        height: 18,
    },
});
