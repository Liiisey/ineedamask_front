import React, {Component} from 'react';
import {ActivityIndicator, Button, View, FlatList} from 'react-native';

class SearchList extends Component {
    render() {
        console.log(this.props.pharmacies);

        const {
            loading,
            pharmacies
        } = this.props;
        if(loading) {
            return (<ActivityIndicator size='large'/>);
        }

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                <Button title='Search' onPress={() => this.props.fetchPharmacies()}/><br/>
                <FlatList data={pharmacies} renderItem={({item}) =>
                    <Button title={item.name} onPress={() => this.props.navigate('Result', {pharmacy: item})}>}</Button>}
                keyExtractor={item => item._id}/>
            </View>
        );
    }
}

export default SearchList;