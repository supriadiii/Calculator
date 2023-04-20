import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OperatorKeys = ({ displayKey, onClick }: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.text}>{displayKey}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f39c12',
        padding: 15,
        borderRadius: 5,
        margin: 5,
        width: 150,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default OperatorKeys;
