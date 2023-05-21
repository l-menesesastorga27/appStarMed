import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from './components/screens/Home';
import Calendario from './components/screens/Calendario';
import Reservas from './components/screens/Reservas';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50, 
  },
  navigationContainer: {
    flex: 1,
    marginTop: 20,
  },
});
export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer
    style={styles.navigationContainer}
    screenOptions={{
      tabBarGap: 150,
      tabBarPosition: 'bottom',
      tabBarLabelStyle: { fontSize: 12},
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }}
    >
    <Tab.Navigator>
      <Tab.Screen 
      name="Home"
      options={{ tabBarLabel: 'Home' }}
      component={HomeScreen} />
      
      <Tab.Screen 
       name="Feed"
       component={Calendario}
       options={{ tabBarLabel: 'Calendario' }}/>

      <Tab.Screen 
       name="Rerservas"
       component={Reservas}
       options={{ tabBarLabel: 'Rerservas' }}/>
    </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}
