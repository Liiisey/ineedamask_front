import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PharmacyListContainer from '../containers/PharmacyListContainer';

class PharmaSearchScreen extends Component {
    render() {
        return (
            <View>
                <Text>Search pharmacies page</Text>
                <PharmacyListContainer/>
            </View>
        );
    }
}

export default PharmaSearchScreen;