import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Buttons';
import styles from '../styles/styles';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            {/* Agregar campos de inicio de sesión aquí */}
            <Button title="Iniciar Sesión" onPress={() => {/* Manejar inicio de sesión */ }} />
        </View>
    );
};

export default LoginScreen;
