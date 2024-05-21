import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Button from '../components/Buttons';
import styles from '../styles/styles';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.subTitle}>Iniciar sesion</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.subTitle}>Registro</Text>
            </Pressable>
        </View>
    );
};

export default WelcomeScreen;
