import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import mask from '../assets/mask.png';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={mask} style={{width: 200, height: 200}}/>
                <Text style={{fontWeight: 'bold', fontSize: 65, textAlign: 'center'}}>I Need A Mask !</Text>
            </View>
        );
    }
}


export default HomeScreen;