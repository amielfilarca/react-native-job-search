import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../constants';

const FilterButton = () => {
    return (
        <TouchableOpacity>
            <Image style={styles.icon} source={icons.filter} />
        </TouchableOpacity>
    );
};

export default FilterButton;

const styles = StyleSheet.create({
    icon: {
        width: 42,
        height: 42,
    },
});
