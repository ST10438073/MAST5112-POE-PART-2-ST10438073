import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';
import FilteredMenuScreen from './FilteredMenuScreen';
import ChefMenuScreen from './ChefMenuScreen';
import AddRemoveMenuScreen from './AddRemoveMenuScreen';
import { MenuProvider } from './MenuContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chef Login" component={LoginScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Filtered Menu" component={FilteredMenuScreen} />
          <Stack.Screen name="Chefs Menu" component={ChefMenuScreen} />
          <Stack.Screen name="Add/Remove Menu Items" component={AddRemoveMenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Christoffel's</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chef Login')}>
        <Text style={styles.buttonText}>Chef Log In</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    fontFamily: 'serif', 
    fontWeight: 'bold',
    color: '#8b4513', 
    textAlign: 'center',
    marginBottom: 30,
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
  spacer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});




