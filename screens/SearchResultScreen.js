import React, {Component} from 'react';
import {View} from 'react-native';
import SearchItemContainer from '../containers/SearchItemContainer';

class SearchResultScreen extends Component {
    render() {
        const {pharmacy} = this.props.route.params;
        return (
            <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                <SearchItemContainer pharmacy={pharmacy}/>
            </View>
        );
    }
}


export default SearchResultScreen;