import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => {
    return <View style={styles.line} />;
};

export default Separator;

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: '#f2f4f7',
        marginVertical: 12,
    },
});
