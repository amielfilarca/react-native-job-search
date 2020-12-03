import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../constants';

const ClearIcon = ({ clearSearchInput }) => {
    return (
        <TouchableOpacity onPress={clearSearchInput}>
            <Image style={styles.icon} source={icons.clear} />
        </TouchableOpacity>
    );
};

export default ClearIcon;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
