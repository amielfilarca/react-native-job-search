import React from 'react';
import { Image, Linking, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../constants';

const OpenIcon = ({ url }) => {
    const openLink = () => {
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity onPress={openLink}>
            <Image style={styles.icon} source={icons.open} />
        </TouchableOpacity>
    );
};

export default OpenIcon;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
