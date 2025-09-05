// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

// const SettingsScreen: React.FC = () => {
//   const navigation = useNavigation();

//   // State for toggles
//   const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   // Toggle handlers
//   const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
//   const toggleDarkMode = () => setDarkMode(previousState => !previousState);

//   const handleLogout = () => {
//     // Add your logout logic here (e.g., clearing session, tokens, etc.)
//     console.log('User logged out');
//     navigation.navigate('SpotifyLogin');  // Redirect to the Login screen
//   };

//   return (
//     <View style={[styles.container, darkMode ? styles.darkMode : styles.lightMode]}>
//       <Text style={[styles.heading, darkMode ? styles.darkText : styles.lightText]}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Notifications</Text>
//         <Switch
//           value={notificationsEnabled}
//           onValueChange={toggleNotifications}
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={notificationsEnabled ? '#1DB954' : '#f4f3f4'}
//         />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
//         <Switch
//           value={darkMode}
//           onValueChange={toggleDarkMode}
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={darkMode ? '#1DB954' : '#f4f3f4'}
//         />
//       </View>

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutText}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   lightMode: {
//     backgroundColor: '#f4f4f4',
//   },
//   darkMode: {
//     backgroundColor: '#191414',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 30,
//     fontWeight: 'bold',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   darkText: {
//     color: '#ffffff',
//   },
//   lightText: {
//     color: '#000000',
//   },
//   settingItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   logoutButton: {
//     backgroundColor: '#1DB954',
//     padding: 15,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//   },
//   logoutText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default SettingsScreen;
