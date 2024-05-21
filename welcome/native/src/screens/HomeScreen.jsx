import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Buttons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DocSentinel</Text>
            <Text style={styles.subtitle}>¡Bienvenido!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Iniciar sesión"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.loginButton}
                />
                <Button
                    title="Registrarse"
                    onPress={() => navigation.navigate('Register')}
                    style={styles.registerButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007EB6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 40,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 50,
    },
    loginButton: {
        backgroundColor: '#0099E6',
    },
    registerButton: {
        backgroundColor: '#E0E0E0',
    },
});

export default HomeScreen;
