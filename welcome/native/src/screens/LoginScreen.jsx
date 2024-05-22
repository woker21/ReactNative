import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DocSentinal</Text>
            <Text style={styles.welcome}>¡Bienvenido de vuelta!</Text>
            <Text style={styles.subtitle}>Inicie sesión en su cuenta</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    keyboardType="email-address"
                    placeholderTextColor="gray"
                />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    placeholderTextColor="gray"
                />
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {/* Manejar la recuperación de contraseña */ }}>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña? <Text style={styles.recover}>Recuperar</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.googleButtonText}>Iniciar Sesión con Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerButtonText}>No tienes una cuenta? <Text style={styles.register}>Registrate</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9E9E9E',
        marginBottom: 20,
    },
    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#333',
    },
    loginButton: {
        backgroundColor: '#0099E6',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#666',
        marginVertical: 10,
    },
    recover: {
        color: '#0099E6',
        fontWeight: 'bold',
    },
    googleButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        marginVertical: 10,
    },
    googleButtonText: {
        color: '#DB4437',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#007EB6',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    register: {
        fontWeight: 'bold',
    },
});

export default LoginScreen;
