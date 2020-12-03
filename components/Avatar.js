import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Avatar = ({ source }) => {
    return (
        <TouchableOpacity>
            <Image style={styles.avatar} source={source} />
        </TouchableOpacity>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
});
