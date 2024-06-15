import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';

const LoginScreen = ({ onLogin }) => {
    const [name, setName] = useState('');
        const [email, setEmail] = useState('');
    
        const handleLoginPress = () => {
        if (name && email) {
            onLogin(name, email);
        } else {
            alert('Please enter your name and email.');
        }
        };
    
    return (
        <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
            <Text style={styles.jobizz}>Jobizz</Text>
            <Text style={styles.welcomeText}>Welcome Back 👋</Text>
            <Text style={styles.headline}>Let's log in. Apply to jobs!</Text>
            <TextInput
                style={styles.name}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.email}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Pressable style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
        </View>
        <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.text}>Or continue with</Text>
            <View style={styles.line} />
        </View>
        <View style={styles.socialsContainer}>
            <Image source={require('../assets/appleLogo.png')} style={styles.socials} />
            <Image source={require('../assets/googleLogo.png')} style={styles.socials} />
            <Image source={require('../assets/facebook.png')} style={styles.socials} />
        </View>
        <View>
            <Text style={styles.accText}>
            Don't have an account?
            <Text style={styles.register}> Register</Text>
            </Text>
        </View>
    </SafeAreaView>
    );
        };
    const styles = StyleSheet.create({
        safeContainer: {
        flex: 1,
        backgroundColor: '#FAFAFD',
        },
        container: {
        alignItems: 'center',
        justifyContent: 'center',
        },
        jobizz: {
        width: 150,
        height: 33,
        top:80,
        left: -118,
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '600',
        color: '#356899',
        textAlign: 'left',
        },
        welcomeText: {
        width: 207,
        height: 63,
        top:90,
        left: -90,
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '600',
        color: '#0D0D26',
        textAlign: 'left',
        lineHeight: 33.6,
        },
        headline: {
        width: 170,
        height: 22,
        top: 65,
        left: -107,
        opacity: 0.5,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 22.4,
        padding: 2,
        textAlign: 'left',
        },
        name: {
        width: 390,
        height: 52,
        top: 130,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        paddingLeft: 15,
        },
        email: {
        width: 390,
        height: 52,
        top: 145,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        paddingLeft: 15,
        },
        button: {
        width: 390,
        height: 56,
        top: 190,
        backgroundColor: '#356899',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        },
        buttonText: {
        width: 47,
        height: 24,
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        lineHeight: 24,
        },
        dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        },
        line: {
        width: 130,
        top: 270,
        backgroundColor: '#AFB0B6',
        borderWidth: 0.5,
        left: 8,
        },
        text: {
        width: 103,
        height: 16,
        left: 8,
        top: 265,
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '400',
        color: '#AFB0B6',
        textAlign: 'center',
        justifyContent: 'center',
        lineHeight: 24,
        marginLeft: 8,
        marginRight: 8,
        },
        socialsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        },
        socials: {
        width: 30,
        height: 30,
        top: 320,
        left: 8,
        marginHorizontal: 30,
        borderRadius: "100%",
        },
        accText: {
        width: 200,
        height: 18,
        top: 380,
        left: 120,
        fontFamily: 'Circular Std',
        fontSize: 14,
        fontWeight: '400',
        color: '#BDBEC2',
        textAlign: 'center',
        justifyContent: 'center',
        lineHeight: 17.71,
        },
        register: {
        color: '#356899',
        },
        });
    export default LoginScreen; 
