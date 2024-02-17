import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Importe as telas corretamente
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
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#5B21B6',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 13, fontWeight: 'bold', marginBottom: 7, marginTop: -7 },
      }}
      screenOptions={({ route }) => ({
        tabBarButton: (props) => (
          <TouchableOpacity onPress={() => navigationGuard(route.name)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {props.children}
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} /> }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} /> }} />
      <Tab.Screen name="Videos" component={VideosScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="video" size={24} color={color} /> }} />
      <Tab.Screen name="Noticias" component={NoticiasScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="newspaper" size={24} color={color} /> }} />
      <Tab.Screen name="CompraDetail" component={CompraDetail} options={{
        tabBarButton: () => <></>,
     
      }} />
    </Tab.Navigator> 
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />} initialRouteName="BottomTab">
      <Drawer.Screen name="BottomTab" component={MyTabs} options={{ headerShown: false }} />
      <Drawer.Screen name="CompraDetail" component={CompraDetail} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function Sidebar({ navigation }) {
  const user = null; // You should replace this with your user state
  const list = []; // You should replace this with your list of sidebar items

  return (
    <View style={{ flex: 1, marginTop: 200 }}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

        <Button
          title="Home" // Modified the title to be a string
          textAlign='justify'
          variant='ghost'
          justifyContent='flex-start'
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Button
          title="Videos" // Modified the title to be a string
          textAlign='justify'
          variant='ghost'
          justifyContent='flex-start'
          onPress={() => {
            navigation.navigate('Videos');
          }}
        />
        <Button
          title="Noticias" // Modified the title to be a string
          textAlign='justify'
          variant='ghost'
          justifyContent='flex-start'
          onPress={() => {
            navigation.navigate('Noticias');
          }}
        />
        <Button
          title="Perfil" // Modified the title to be a string
          textAlign='justify'
          variant='ghost'
          justifyContent='flex-start'
          onPress={() => {
            navigation.navigate('Perfil');
          }}
        />

      </ScrollView>

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
