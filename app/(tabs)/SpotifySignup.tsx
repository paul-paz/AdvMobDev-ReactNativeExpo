import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Props {}

const SpotifySignUpPage: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/spotifyTransparentGreen.png')} // Use the Spotify logo
        style={styles.logo}
      />

      <View style={styles.form}>
        {/* Full Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          autoCapitalize="words"
          placeholderTextColor="#B3B3B3"
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email address"
          autoCapitalize="none"
          placeholderTextColor="#B3B3B3"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#B3B3B3"
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <Text style={styles.loginTextNormal}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191414',  // Spotify dark background
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
    borderRadius: 60,
  },
  socialButtons: {
    flexDirection: 'row',  // Arrange buttons in a row
    justifyContent: 'space-around',
    width: '80%',  // Limit the width to avoid stretching
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  facebookButton: {
    backgroundColor: '#3b5998',  // Facebook Blue
  },
  googleButton: {
    backgroundColor: '#FFFFFF',  // Google White
    borderWidth: 1,
    borderColor: '#B3B3B3',
  },
  appleButton: {
    backgroundColor: '#333333',  // Apple Black
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',  // Ensure the icon fits within the button
  },
  form: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#B3B3B3',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#1C1C1C',
    borderRadius: 5,
    color: '#FFFFFF',
  },
  signUpButton: {
    backgroundColor: '#1DB954',  // Spotify Green
    padding: 12,
    borderRadius: 30,
    width: 250,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  login: {
    flexDirection: 'row',
  },
  loginTextNormal: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  loginText: {
    color: '#1DB954',  // Spotify Green for login link
    fontSize: 16,
    marginLeft: 5,
  },
});

export default SpotifySignUpPage;