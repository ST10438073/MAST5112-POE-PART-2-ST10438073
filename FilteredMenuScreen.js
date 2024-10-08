import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function FilteredMenuScreen({route, navigation}){
  const { menuItems = [] } = route.params; 
  const [selectedCourse, setSelectedCourse] = useState('');

  const filterCourses = () => {
    if (!menuItems || menuItems.length === 0) return [];
  
    if (selectedCourse === 'Starters') {
      return menuItems
        .filter(course => course.starter)
        .map(course => ({ name: course.starter, description: course.starterDescription }));
    } else if (selectedCourse === 'Mains') {
      return menuItems
        .filter(course => course.main) 
        .map(course => ({ name: course.main, description: course.mainDescription }));
    } else if (selectedCourse === 'Desserts') {
      return menuItems
        .filter(course => course.dessert) 
        .map(course => ({ name: course.dessert, description: course.dessertDescription }));
    }
    return [];
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Filtered Menu</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedCourse(value)}
        items={[
          { label: 'Starters', value: 'Starters' },
          { label: 'Mains', value: 'Mains' },
          { label: 'Desserts', value: 'Desserts' }
        ]}
        style={pickerSelectStyles}
      />

      <FlatList
        data={filterCourses()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
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
    },
    text: {
      fontSize: 18,
      color: '#4e342e',
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
      fontSize: 18,
      fontWeight: 'bold',
    },
    separator: {
      height: 20,
  },
  });
  
  const pickerSelectStyles = {
    inputIOS: {
      fontSize: 18,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#cd853f',
      borderRadius: 8,
      color: '#4e342e',
      backgroundColor: '#fff',
      marginBottom: 20,
    }
  };
