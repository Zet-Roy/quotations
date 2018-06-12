import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

    static navigationOptions = {
        title: 'О приложении',
        headerStyle: {
            backgroundColor: '#2E8B57',
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Котировки"
                    onPress={() => this.props.navigation.navigate('Quotations')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3CB371',
        alignItems: 'center',
        justifyContent: 'center',
    },
});