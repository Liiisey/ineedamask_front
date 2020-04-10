import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

class SearchForm extends Component {
    componentDidMount() {
        this.props.loadPharmacies()
    }

    render() {
        console.log(this.props.pharmacies);

        /*const {
            loading
        } = this.props;

        if(loading) {
            return (<ActivityIndicator size='large'/>);
        }*/

        return (
            <View>
                
            </View>
        );
    }
}

export default SearchForm;