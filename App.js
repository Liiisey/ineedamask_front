import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const store = createStore(reducers, applyMiddleware(thunk));
const Tab = createBottomTabNavigator();

import AddScreen from './screens/AddScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';


export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
              screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Search') {
                iconName = 'ios-pin';
              } else if (route.name === 'Add') {
                iconName = 'ios-add-circle';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
            tabBarOptions={{
              showLabel: false,
              activeTintColor: 'black',
              inactiveTintColor: 'grey',
           }}>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Search' component={SearchScreen}/>
            <Tab.Screen name='Add' component={AddScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

