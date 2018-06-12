import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getQuotations } from "../actions/actionQuotations";
import ListQuotations from "./../component/ListQuotations";

class App extends React.Component {

    static navigationOptions = {
        title: 'Котировки',
        headerStyle: {
            backgroundColor: '#2E8B57',
        }
    };

    constructor() {
        super();
        this.state = {
        }
    }

    componentWillMount() {
        this.props.getQuotations()
        this.timerID = setInterval(() => this.props.getQuotations(true), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (!this.props.quotations.isReady) {
            return (
                <View style={styles.loadContainer}>
                    <Text>Load</Text>
                </View>
            )
        }

        if(this.props.quotations.error.length > 0) {
            return (
                <View style={styles.errorContainer}>
                    <Text>{this.props.quotations.error}</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={{ width: '95%' }}>
                    <ListQuotations quotations={this.props.quotations.data} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, { getQuotations })(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3CB371',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorContainer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});