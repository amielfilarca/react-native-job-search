import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../constants';

const BackIcon = ({ navigation }) => {
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={goBack}>
            <Image style={styles.icon} source={icons.back} />
        </TouchableOpacity>
    );
};

export default BackIcon;

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
});
