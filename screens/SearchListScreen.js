import React, {Component} from 'react';
import {View} from 'react-native';
import SearchListContainer from '../containers/SearchListContainer';

class SearchListScreen extends Component {
    render() {
        return (
            <View>
                <SearchListContainer navigate={this.props.navigation.navigate}/>
            </View>
        );
    }
}


export default SearchListScreen;