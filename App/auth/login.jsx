import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  const [username, setUsername] = useState('');
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [release, setRelease] = useState(false);

  const handleRelease = () => {
    setRelease(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        end={{ x: 4, y: 5 }}
        start={{ x: 44, y: 0 }}
        colors={['rgba(14,12,40,1)', 'rgba(27,27,52,1)', 'rgba(45,55,57,1)', 'rgba(14,12,40,1)', 'rgba(27,27,52,1)', 'rgba(27,27,52,1)', 'rgba(27,27,52,1)', 'rgba(27,27,52,1)']}
        style={styles.background}
      />

      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.languageSelector}>
        <Text style={styles.languageText}>English (US)</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
            placeholderTextColor="#ccc"
            onPressOut={handleRelease}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            onPressOut={handleRelease}
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <TouchableOpacity>
          <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  languageSelector: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  languageText: {
    color: '#fff',
    fontSize: 14,
  },
  form: {
    width: '80%',
    marginTop: 150,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  createAccount: {
    color: '#1e90ff',
    fontSize: 14,
  },
});
