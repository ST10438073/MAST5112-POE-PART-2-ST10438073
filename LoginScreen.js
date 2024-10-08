import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity,} from 'react-native';
import { useState } from "react";

export default function LoginScreen({ navigation }){

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = () => {
      if (username === 'chef' && password === 'password') {
        navigation.navigate('Chefs Menu');
      }
      else {
        setErrorMessage('Invalid username or password. Please try again.'); 
    }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Chef Login</Text>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input}/>
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5dc',
      justifyContent: 'center',
      padding: 20,
    },
    headerText: {
      fontSize: 24,
      fontFamily: 'serif', 
      fontWeight: 'bold',
      color: '#8b4513',
      textAlign: 'center',
      marginBottom: 30,
    },
    input: {
      borderColor: '#cd853f',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#a0522d', 
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
  });
  
  