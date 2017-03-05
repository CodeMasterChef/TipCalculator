import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    TextInput
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            segmentElementIndex: 0,
            billAmount: 0,
            tipAmount: 0,
            percent: 0,
            result: 0
        }
    }
    handleSegmentIndexChange(index) {
        this.setState({
            segmentElementIndex: index
        })
        this.handleBillAmountChange(this.state.billAmount, index);
    }
    handleBillAmountChange(billAmount, index) {
        this.setState({
            billAmount: billAmount
        })
        if (!index && index != 0) {
            index = this.state.segmentElementIndex;
        }
        billAmount = parseFloat(billAmount);
        var percent = this.segmentValues()[index];
        percent = parseFloat(percent) / 100;
        var tipAmount = billAmount * percent;
        this.setState(
            {
                tipAmount: tipAmount,
                percent: percent,
                result: billAmount + tipAmount
            }
        )
    }
    segmentValues() {
        return ["10%", "15%", "50%"];
    }
    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.title}>Tip Calculator</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }} >
                    <Text style={{ height: 30, width: 100 }} >Bill Amount</Text>
                    <TextInput style={styles.billBox} onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}
                        keyboardType='numeric'
                        maxLength={10} />
                </View>
                <View style={{ paddingTop: 10 }}>
                    <SegmentedControlTab
                        values={this.segmentValues()}
                        onTabPress={index => this.handleSegmentIndexChange(index)}
                    />
                </View>
                <View>
                    <View>
                        <Text>Bill Amount: {this.state.billAmount}</Text>
                    </View>
                    <View >
                        <Text>Tip Amount: {this.state.tipAmount}</Text>
                    </View>
                    <View >
                        <Text>Percent: {parseFloat(this.segmentValues()[this.state.segmentElementIndex]) / 100}</Text>
                    </View>
                    <View >
                        <Text style={styles.result}>Result:  {this.state.result}</Text>
                    </View>
                </View>


            </View >

        );
    }

}
const styles = StyleSheet.create({
    title: {
        fontWeight: '900',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 30
    },
    billBox: {
        borderWidth: 1,
        borderStyle: 'solid',
        height: 40,
        width: 230
    },
    container: {
        padding: 10
    }
    , result: {
        fontWeight: '900',
        paddingTop: 10
    }
})
module.exports = Calculator