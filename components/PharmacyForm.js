import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class PharmacyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', address: '', longitude: '', latitude: '', mask: ''};
    }

    onSubmit() {
        console.log(this.state.name);
        console.log(this.state.address);
        console.log(this.state.longitude);
        console.log(this.state.latitude);
        console.log(this.state.mask);
        this.props.addPharmacy({
            name: this.state.name,
            address: this.state.address,
            longitude: this.state.longitude,
            latitude: this.state.latitude,
            mask: this.state.mask,
        });
        this.setState({name: '', address: '', longitude: '', latitude: '', mask: ''});
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.name} onChangeText={text => this.setState({name: text})} placeholder='Name' style={styles.inputStyle}/>
                <TextInput value={this.state.address} textContentType='fullStreetAddress' onChangeText={text => this.setState({address: text})} placeholder='Address' style={styles.inputStyle}/>
                <TextInput value={this.state.longitude} keyboardType='number-pad' onChangeText={number => this.setState({longitude: number})} placeholder='Longitude' style={styles.inputStyle}/>
                <TextInput value={this.state.latitude} keyboardType='number-pad' onChangeText={number => this.setState({latitude: number})} placeholder='Latitude' style={styles.inputStyle}/>
                <TextInput value={this.state.mask} keyboardType='number-pad' onChangeText={number => this.setState({mask: number})} placeholder='Number of masks available' style={styles.inputStyle}/><br/><br/>
                <Button title='Save' onPress={() => this.onSubmit()}/>
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    inputStyle: {
        marginTop: 25,
        width: 325,
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#b9e4c9',
    }
});

export default PharmacyForm;