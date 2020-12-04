import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Separator from '../components/Separator';
import BackIcon from '../components/BackIcon';
import OpenIcon from '../components/OpenIcon';
import HeartIcon from '../components/HeartIcon';
import ApplyButton from '../components/ApplyButton';
import { icons, images } from '../constants';

const Post = ({ navigation, route }) => {
    const {
        id,
        type,
        url,
        created_at,
        company,
        company_url,
        location,
        title,
        description,
        how_to_apply,
        company_logo,
    } = route.params.job;

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <BackIcon navigation={navigation} />
                    <OpenIcon url={url} />
                </View>
                <View style={styles.top}>
                    <Image
                        style={styles.logo}
                        source={
                            company_logo
                                ? { uri: company_logo }
                                : images.placeholderLogo
                        }
                    />
                    <Text style={styles.h1}>{title}</Text>
                    <Text style={styles.h2}>{company}</Text>
                    <Text style={styles.h3}>{location}</Text>
                    <Text style={styles.h4}>{type}</Text>
                </View>
                <Separator />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.body1}>Description</Text>
                    <Text style={styles.body2}>{description}</Text>
                    <Text style={styles.body1}>How to Apply</Text>
                    <Text style={styles.body2}>{how_to_apply}</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.applyButton}>
                    <ApplyButton />
                </View>
                <View style={styles.saveButton}>
                    <HeartIcon />
                </View>
            </View>
        </>
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    top: {
        padding: 12,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 12,
        borderRadius: 20,
    },
    h1: {
        color: '#3b4d65',
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 32,
        textAlign: 'center',
        marginVertical: 6,
    },
    h2: {
        color: '#8897a7',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 24,
    },
    h3: {
        color: '#8897a7',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
    },
    h4: {
        color: '#3b4d65',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        marginTop: 12,
        backgroundColor: '#eff2f5',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    descriptionContainer: {
        marginBottom: 48,
    },
    body1: {
        color: '#3b4d65',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 26,
        marginVertical: 12,
    },
    body2: {
        color: '#8897a7',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
    },
    footer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 50 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    applyButton: {
        flex: 1,
        borderRadius: 15,
        marginRight: 6,
    },
    saveButton: {
        marginLeft: 6,
    },
});
