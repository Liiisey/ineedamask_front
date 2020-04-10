import React, {Component} from 'react';
import {View,Text} from 'react-native';
import PharmacyFormContainer from "../containers/PharmacyFormContainer";

class AddScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                <Text style={{fontWeight: 'bold', fontSize: 35}}>Add a pharmacy</Text>
                <PharmacyFormContainer/>
            </View>
        );
    }
}


export default AddScreen;