import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeScreen } from './src/screens/home.js';
import { PerfilScreen } from './src/screens/perfil.js';
import { VideosScreen } from './src/screens/videos.js';
import { NoticiasScreen } from './src/screens/noticias.js';
import { CompraDetail } from './src/screens/compraDetail.js';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();

  const navigationGuard = (link) => {
    navigation.navigate(link);
  };

  return (
    <Tab.Navigator
      initialRouteName="Perfil"

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#490397',
        tabBarButton: (props) => (
          <TouchableOpacity onPress={() => navigationGuard(route.name)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {props.children}
          </TouchableOpacity>
        ),
      })}

    >
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} /> }} />
      <Tab.Screen name="Videos" component={VideosScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="video" size={24} color={color} /> }} />
      <Tab.Screen name="Noticias" component={NoticiasScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="newspaper" size={24} color={color} /> }} />
      <Tab.Screen name="Compras" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} /> }} />
      <Tab.Screen name="CompraDetail" component={CompraDetail} options={{
        tabBarButton: () => <></>,
      }} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#490397'
      }}
      drawerContent={(props) => <Sidebar {...props} />} initialRouteName="BottomTab">
      <Drawer.Screen name="BottomTab" component={MyTabs} options={{ headerShown: false }} />
      <Drawer.Screen name="CompraDetail" component={CompraDetail} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function Sidebar({ navigation }) {

  return (
    <View style={{ flex: 1, marginTop: 200, gap: 10, padding: 10 }}>

      <Button
        title="Perfil"
        textAlign='justify'
        variant='ghost'
        color='#490397'
        justifyContent='flex-start'
        onPress={() => {
          navigation.navigate('Perfil');
        }}
      />

      <Button
        color='#490397'
        title="Videos"
        textAlign='justify'
        variant='ghost'
        justifyContent='flex-start'
        onPress={() => {
          navigation.navigate('Videos');
        }}
      />

      <Button
        color='#490397'
        title="Noticias"
        textAlign='justify'
        variant='ghost'
        justifyContent='flex-start'
        onPress={() => {
          navigation.navigate('Noticias');
        }}
      />

      <Button
        color='#490397'
        title="Compras"
        textAlign='justify'
        variant='ghost'
        justifyContent='flex-start'
        onPress={() => {
          navigation.navigate('Compras');
        }}
      />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={MyDrawer} />
        <Stack.Screen name="CompraDetail" component={CompraDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
