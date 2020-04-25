import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

export default class TelaFlex extends Component {
    render() {
        return (
            <View>
                <View style={styles.primeiro}></View>
                <View style={styles.segundo}></View>
                <View style={styles.terceiro}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    primeiro: {
        flex: 1,
        backgroundColor: 'red',
    },
    segundo: {
        flex: 2,
        backgroundColor: 'blue',
    },
    terceiro: {
        flex: 3,
        backgroundColor: 'green',
    }
});