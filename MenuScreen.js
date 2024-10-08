import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { useMenu } from './MenuContext';


export default function MenuScreen({ navigation }){

  const { menuItems } = useMenu();
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Menu</Text>
        <FlatList
        data={menuItems} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.price}>Price: R{item.price}</Text>
            <Text style={styles.sectionTitle}>Starter</Text>
            <Text style={styles.dishText}>{item.starter}</Text>
            <Text style={styles.description}>{item.starterDescription}</Text>
            <Text style={styles.sectionTitle}>Main</Text>
            <Text style={styles.dishText}>{item.main}</Text>
            <Text style={styles.description}>{item.mainDescription}</Text>
            <Text style={styles.sectionTitle}>Dessert</Text>
            <Text style={styles.dishText}>{item.dessert}</Text>
            <Text style={styles.description}>{item.dessertDescription}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filtered Menu',{ menuItems })}>
      <Text style={styles.buttonText}>Filter</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Return</Text>
    </TouchableOpacity>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5dc',
      padding: 20,
    },
    headerText: {
      fontSize: 24,
      fontFamily: 'serif', 
      fontWeight: 'bold',
      color: '#8b4513',
      marginBottom: 20,
      textAlign: 'center',
    },
    menuItem: {
      backgroundColor: '#d2b48c',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
    },
    menuItemText: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: 24,
      color: '#4e342e',
    },
    price: {
      fontSize: 21,
      color: '#8b4513',
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#8b4513',
      marginTop: 10,
    },
    dishText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#4e342e',
      marginBottom: 5,
    },
    description: {
      fontSize: 18,
      color: '#6d4c41',
      marginBottom: 10,
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
      fontSize: 20,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 18,
      color: '#4e342e',
    },
  });
 
  