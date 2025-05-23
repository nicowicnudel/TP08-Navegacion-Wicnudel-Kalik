import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackANavigator from './StackNavigatorA';
import StackBNavigator from './StackNavigatorB';
import StackCNavigator from './StackNavigatorC';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackANavigator} />
      <Tab.Screen name="Buscador" component={StackBNavigator} />
      <Tab.Screen
        name="Perfil"
        component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
