import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
interface Props {}

const SpotifyLoginPage: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/spotifyTransparentGreen.png')}
        style={styles.logo}
      />

      <View style={styles.emailLogin}>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          autoCapitalize="none"
          placeholderTextColor="#B3B3B3"  // Using Spotify's gray for placeholder
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#B3B3B3"  // Using Spotify's gray for placeholder
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialButtons}>
        {/* Facebook Button */}
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Image
            source={require('@/assets/images/facebook-logo.png')}  // Add the Facebook logo in your assets
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Image
            source={require('@/assets/images/google-logo.png')}  // Add the Google logo in your assets
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Apple Button */}
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Image
            source={require('@/assets/images/apple-logo.png')}  // Add the Apple logo in your assets
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <Text style={styles.signupTextNormal}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign up</Text>
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
    backgroundColor: '#191414',  // Spotify's dark background
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
    borderRadius: 60,
  },
  socialButtons: {
    flexDirection: 'row',  // Arrange buttons in a row
    justifyContent: 'space-around',  // Space the buttons evenly
    width: '70%',  // Limit the width to avoid stretching
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'transparent',  // Transparent background for the buttons
  },
  facebookButton: {
    backgroundColor: '#3b5998',  // Facebook Blue
  },
  googleButton: {
    backgroundColor: '#FFFFFF',  // White for Google
    borderWidth: 1,
    borderColor: '#B3B3B3',  // Spotify gray for border
  },
  appleButton: {
    backgroundColor: '#333333',  // Apple Black
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',  // Ensure the icon fits well within the circular button
  },
  emailLogin: {
    marginBottom: 40,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#B3B3B3',  // Spotify gray for border
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#1C1C1C',  // Slightly darker background for inputs
    borderRadius: 5,
    color: '#FFFFFF',  // Text color is white
  },
  forgotPassword: {
    color: '#1DB954',
    marginBottom: 10,
    textAlign: 'center',
    width: 250,
  },
  loginButton: {
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 30,
    width: 250,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  signup: {
    flexDirection: 'row',
  },
  signupTextNormal: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  signupText: {
    color: '#1DB954',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default SpotifyLoginPage;
