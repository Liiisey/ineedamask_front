import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SearchListContainer from "../containers/SearchListContainer";

class ResultScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Result page</Text>
                <SearchListContainer navigate={navigate}/>
            </View>
        );
    }
}


export default ResultScreen;