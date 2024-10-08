import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useMenu } from './MenuContext';


export default function AddRemoveMenuScreen({ navigation }) {
  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [starter, setStarter] = useState('');
  const [starterDescription, setStarterDescription] = useState('');
  const [main, setMain] = useState('');
  const [mainDescription, setMainDescription] = useState('');
  const [dessert, setDessert] = useState('');
  const [dessertDescription, setDessertDescription] = useState('');
  const { addItem, removeItem, menuItems } = useMenu();

  const handleAddItem = () => {
    if (courseName && price && starter && main && dessert && starterDescription && mainDescription && dessertDescription) {
      const item = {
        name: courseName,
        price,
        starter,
        starterDescription,
        main,
        mainDescription,
        dessert,
        dessertDescription,
      };
      addItem(item);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setCourseName('');
    setPrice('');
    setStarter('');
    setStarterDescription('');
    setMain('');
    setMainDescription('');
    setDessert('');
    setDessertDescription('');
  };

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add/Remove Menu Items</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Course Name"
        value={courseName}
        onChangeText={setCourseName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Starter"
        value={starter}
        onChangeText={setStarter}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Starter Description"
        value={starterDescription}
        onChangeText={setStarterDescription}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Main"
        value={main}
        onChangeText={setMain}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Main Description"
        value={mainDescription}
        onChangeText={setMainDescription}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Dessert"
        value={dessert}
        onChangeText={setDessert}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Dessert Description"
        value={dessertDescription}
        onChangeText={setDessertDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()} // Ensure unique keys
        renderItem={({ item }) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.text}>{item.name} - R{item.price}</Text>
            <Text style={styles.text}>{item.starter}</Text>
            <Text style={styles.text}>{item.starterDescription}</Text>
            <Text style={styles.text}>{item.main}</Text>
            <Text style={styles.text}>{item.mainDescription}</Text>
            <Text style={styles.text}>{item.dessert}</Text>
            <Text style={styles.text}>{item.dessertDescription}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chefs Menu')}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  textInput: {
    fontSize: 18,
    color: '#4e342e',
    marginBottom: 10, // Add margin for spacing
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
  menuItemContainer: {
    marginBottom: 10, // Add space between items
    padding: 10,
    backgroundColor: '#fff', // Background color for each item
    borderRadius: 5, // Rounded corners
  },
  removeButton: {
    color: 'red', // Change color for visibility
    marginTop: 5,
  },
});
