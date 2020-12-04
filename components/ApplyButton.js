import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ApplyButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Apply Now</Text>
        </TouchableOpacity>
    );
};

export default ApplyButton;

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#ea6161',
        borderRadius: 15,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
