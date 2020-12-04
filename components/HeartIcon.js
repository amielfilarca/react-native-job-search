import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../constants';

const HeartIcon = () => {
    return (
        <TouchableOpacity>
            <Image style={styles.icon} source={icons.heart} />
        </TouchableOpacity>
    );
};

export default HeartIcon;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    },
});
