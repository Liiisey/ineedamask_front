import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SearchItem extends Component {
    render() {
        const {pharmacy} = this.props;
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Welcome to {pharmacy.name}</Text><br/>
                <Text>Address: {pharmacy.address}</Text>
                <Text>Masks available: {pharmacy.mask}</Text>
            </View>
        );
    }
}


export default SearchItem;