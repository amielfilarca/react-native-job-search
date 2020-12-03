import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    differenceInDays,
    differenceInHours,
    differenceInWeeks,
} from 'date-fns';
import { images } from '../constants';

const JobListItem = ({ item }) => {
    const { type, created_at, company, location, title, company_logo } = item;

    const formatDate = () => {
        const now = Date.now();
        const datePosted = Date.parse(created_at);

        if (differenceInWeeks(now, datePosted) > 0) {
            const d = differenceInWeeks(now, datePosted);
            return d === 1 ? `${d} week` : `${d} weeks`;
        } else if (differenceInDays(now, datePosted) > 0) {
            const d = differenceInDays(now, datePosted);
            return d === 1 ? `${d} day` : `${d} days`;
        } else {
            const d = differenceInHours(now, datePosted);
            return d === 1 ? `${d} hour` : `${d} hours`;
        }
    };

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={
                        company_logo
                            ? { uri: company_logo }
                            : images.placeholderLogo
                    }
                />
                <View style={styles.center}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>
                        {company} &bull; {location}
                    </Text>
                    <Text style={styles.jobType}>{type}</Text>
                </View>
                <Text style={styles.date}>{formatDate()}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default JobListItem;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#e9edf1',
        borderRadius: 15,
        marginVertical: 12,
        padding: 12,
        flexDirection: 'row',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginTop: 6,
        marginRight: 12,
    },
    center: {
        flex: 4,
    },
    title: {
        color: '#3f5066',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
    },
    subtitle: {
        color: '#96a3b1',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 8,
    },
    jobType: {
        color: '#7c8c9d',
        fontSize: 14,
        fontWeight: '600',
    },
    date: {
        flex: 1,
        textAlign: 'right',
        color: '#a5afbb',
        fontWeight: '600',
    },
});
