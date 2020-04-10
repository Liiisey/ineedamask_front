import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchListScreen from './SearchListScreen';
import SearchResultScreen from './SearchResultScreen';

const Stack = createStackNavigator();

class SearchScreen extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Search' component={SearchListScreen}/>
                <Stack.Screen name='Result' options={{title:'Pharmacy'}} component={SearchResultScreen}/>
            </Stack.Navigator>
        );
    }
}


export default SearchScreen;