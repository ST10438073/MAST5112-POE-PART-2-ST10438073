import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    loadMenuItems();
  }, []);

  const loadMenuItems = async () => {
    try {
      const storedMenuItems = await AsyncStorage.getItem('menuItems');
      if (storedMenuItems) {
        setMenuItems(JSON.parse(storedMenuItems));
      }
    } catch (error) {
      console.error('Failed to load menu items', error);
    }
  };

  const addItem = async (item) => {
    const updatedMenuItems = [...menuItems, item];
    setMenuItems(updatedMenuItems);
    await AsyncStorage.setItem('menuItems', JSON.stringify(updatedMenuItems));
  };

  const removeItem = async (item) => {
    const updatedMenuItems = menuItems.filter((menuItem) => menuItem !== item);
    setMenuItems(updatedMenuItems);
    await AsyncStorage.setItem('menuItems', JSON.stringify(updatedMenuItems));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};
