import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Registrate</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Tu seguridad, nuestra prioridad: organiza tus archivos personales y legales.</Text>

                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Nombres"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Apellidos"
                        placeholderTextColor="gray"
                    />
                </View>

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
                    <Ionicons name="calendar-outline" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha de nacimiento"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="location-outline" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Lugar de nacimiento"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Registrarme</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    formContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0099E6',
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
    registerButton: {
        backgroundColor: '#0099E6',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
