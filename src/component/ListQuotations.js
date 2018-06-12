import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class ListQuotations extends React.Component {
    _renderItem = ({ item }) => (
        <View style={{
            flexDirection: 'column',
            paddingVertical: 10
        }}>
            <View style={{ backgroundColor: 'white' }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.ticker_name}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{}}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>last</Text>
                    <Text>{item.last}</Text>
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>highestBid</Text>
                    <Text>{item.highestBid}</Text>
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>percentChange</Text>
                    <Text>{item.percentChange}</Text>
                </View>
            </View>
        </View>
    )

    _itemSeparatorComponent = () => (
        <View style={{ height: 2, backgroundColor: 'black' }}>
        </View>
    )

    render() {
        return (
            <FlatList
                data={this.props.quotations}
                extraData={this.props.quotations}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._itemSeparatorComponent}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}