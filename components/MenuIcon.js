import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuIcon = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.firstLine} />
                <View style={styles.secondLine} />
            </View>
        </TouchableOpacity>
    );
};

export default MenuIcon;

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        justifyContent: 'center',
    },
    firstLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#364860',
        borderRadius: 2,
        marginBottom: 5,
    },
    secondLine: {
        width: '60%',
        height: 3,
        backgroundColor: '#364860',
        borderRadius: 2,
    },
});
