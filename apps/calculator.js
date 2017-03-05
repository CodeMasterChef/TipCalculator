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
                result: billAmount + tipAmount
            }
        )
    }
    segmentValues() {
        return ["10%", "15%", "50%"];
    }
    render() {
        return (

            <View>

                <Button
                    tyle={{ flex: 1, margin: 5, fontSize: 20 }}
                    title="Setting"
                    onPress={() => this.props.navigator.push({ id: 'BlankPage' })}
                />
                <View>
                    <Text>Tip Calculator</Text>
                </View>
                <View>
                    <Text>Bill Amount</Text>
                    <TextInput onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}
                        keyboardType='numeric'
                        maxLength={10}
                    />
                </View>

                <SegmentedControlTab
                    values={this.segmentValues()}
                    onTabPress={index => this.handleSegmentIndexChange(index)}
                />
                <View >
                    <Text>Bill Amount:  {this.state.billAmount}</Text>
                </View>
                <View >
                    <Text>Tip Amount:  {this.state.tipAmount}</Text>
                </View>
                <View >
                    <Text>Result:  {this.state.result}</Text>
                </View>

            </View >

        );
    }
}

module.exports = Calculator