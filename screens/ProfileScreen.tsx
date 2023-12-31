import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { MainStackParamList } from '../utils/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => navigation.navigate('Settings')}>
                <Text>Go to Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationButton: {
        backgroundColor: 'forestgreen',
        margin: 30,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
