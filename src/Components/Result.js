import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Easing } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Platform } from "react-native";
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch, Picker, Button, Title, Thumbnail, Footer } from 'native-base';
import { Headers } from './Common';
import { Result as styles } from './Styles/StyleHome';
import Rating from 'react-native-rating';

const Item = Picker.Item;
let { width } = Dimensions.get('window');
const images = {
    starFilled: require('../../assets/star_filled.png'),
    starUnfilled: require('../../assets/star_unfilled.png')
}


export default class Result extends Component {
    ListItems = (numberBottom) => (
        <ListItem avatar
            style={{
                marginTop: 20,
                paddingBottom: 15,
                paddingLeft: 15,
                paddingRight: 15,
                borderBottomWidth: numberBottom,
                marginLeft: 0,
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
            onPress={() => this.props.navigation.navigate('screenSignUp')
            }>
            <View style={{
                width: 70,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Thumbnail source={require('./../images/avarta.png')} style={{ width: 50, height: 50 }} />
                <Text style={{ fontSize: 12, color: '#959595' }}>Minh</Text>
                <Rating
                    max={3}
                    initial={3}
                    selectedStar={images.starFilled}
                    unselectedStar={images.starUnfilled}
                    editable={false}
                    config={{
                        easing: Easing.inOut(Easing.ease),
                        duration: 350
                    }}
                    stagger={80}
                    maxScale={1.4}
                    starStyle={{
                        width: 16,
                        height: 15,
                        marginRight: 3
                    }}
                />
            </View>
            <View style={{
                borderBottomWidth: 0,
                flex: 1,
                paddingLeft: 10

            }}>
                <Text note style={{ fontSize: 15, color: '#959595', fontWeight: 'bold' }}>District 1, HCMC</Text>
                <Text note style={{ fontSize: 12, color: '#959595', marginTop: 7 }}>Hi there my name is eria,Hi there my name is eria, dammy dammy dammy dammy</Text>

            </View>
        </ListItem>
    )

    render() {
        return (
            <Container>
                <Headers
                    title="Result"
                    Arrow={true}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => { this.props.navigation.goBack(0); }}
                />


                <Content style={{ backgroundColor: '#fff' }}>
                    <List style={[styles.buttonContainer, { width: width, paddingRight: 0, marginRight: 0 }]}>
                        {this.ListItems(1)}
                        {this.ListItems(1)}
                        {this.ListItems(1)}
                        {this.ListItems(1)}
                        {this.ListItems(0)}
                    </List>
                    <Button transparent style={{ alignSelf: 'center' }}>
                        <Text style={{ color: '#707070', textDecorationLine: 'underline' }}>See more shitter</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
