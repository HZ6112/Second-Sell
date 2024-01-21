import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen'
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessageScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';
import {Button, Text, AsyncStorage} from 'react-native'; 
import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigation';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading'


export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  
  const restoreUser = async () =>{
    const user = await authStorage.getUser();
    if(user) setUser(user);
    
  }
  
  if(!isReady) 
    return (<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)}
    onError={console.warn}/>);

  
  return(
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice />
   <NavigationContainer theme={NavigationTheme}>
      {user ?<AppNavigator />:<AuthNavigator/>}
    </NavigationContainer>
    </AuthContext.Provider>
   )
}


