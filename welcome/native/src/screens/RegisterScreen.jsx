import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Buttons';
import styles from '../styles/styles';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrarse</Text>
            {/* Agregar campos de registro aquí */}
            <Button title="Registrarse" onPress={() => {/* Manejar registro */ }} />
        </View>
    );
};

export default RegisterScreen;
