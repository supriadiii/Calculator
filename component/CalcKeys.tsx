import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CalcKeys = ({ displayKey, onClick }: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.text}>{displayKey}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4d4d4d',
        padding: 15,
        borderRadius: 5,
        margin: 5,
        width: 100
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default CalcKeys;
