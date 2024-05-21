import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, style }) => (
    
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
