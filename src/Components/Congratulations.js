import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Image, Platform, Easing, StatusBar } from 'react-native'

import {
    Container, Header,
    Content, List, ListItem,
    Icon, Left, Body, Right,
    Switch, Picker, Button,
    Title, Thumbnail, Footer, FooterTab,
    Text, CardItem,
    Card, Input, Item
} from 'native-base';


import { Headers, Footers } from './Common';
import { Confirmation as styles } from './Styles/StyleHome';
import Rating from 'react-native-rating';

let { width } = Dimensions.get('window');
const images = {
    starFilled: require('../../assets/star_filled.png'),
    starUnfilled: require('../../assets/star_unfilled.png')
}

export default class Congratulations extends Component {
    render() {
        return (
            <Container style={styles.BackgroundWhite}>
                <StatusBar hidden={true} />
                <Headers
                    title=""
                    Arrow={true}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <Content style={{ marginTop: 10 }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#FF7F88',
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}> Congratulations! </Text>

                    <Image style={{ alignSelf: 'center', width: 27, height: 35, marginTop: 20, marginBottom: 10 }} source={require('./../images/iconShitter.png')} />

                    <Text style={{
                        fontSize: 14,
                        color: '#707070',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        textAlign: 'center',
                        lineHeight: 25
                    }}>
                        Your shitter accepted your offer {'\n'}
                        11/12/2018 - 11/12/2018 {'\n'}
                        11:00 ~ 12:00 {'\n'}
                    </Text>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Thumbnail small style={{ width: 50, height: 50, marginBottom: 20 }} source={require('./../images/AvartaProfile.png')} />
                        <Rating
                            initial={4}
                            max={4}
                            selectedStar={images.starFilled}
                            unselectedStar={images.starUnfilled}
                            config={{
                                easing: Easing.inOut(Easing.ease),
                                duration: 350
                            }}
                            stagger={80}
                            maxScale={1.4}
                            starStyle={{
                                width: 20,
                                height: 20,
                                marginRight: 5
                            }}
                        />
                        <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 7 }}>
                            <Text style={{ fontSize: 13, color: '#959595', fontWeight: 'bold' }}>MINH, </Text>
                            <Text style={{ fontSize: 10, color: '#959595', fontWeight: 'bold', alignSelf: 'flex-end' }}> 25 years old</Text>
                        </View>
                        <Text style={{ fontSize: 10, color: '#959595', fontWeight: 'bold' }}>Distric 1, HCMC</Text>
                    </View>


                    <Button iconLeft rounded transparent
                        style={{
                            backgroundColor: '#4A90E2',
                            alignSelf: 'center',
                            paddingLeft: 50,
                            paddingRight: 50,
                            marginBottom: 20,
                            marginTop: 20
                        }} 
                        onPress={() => this.props.navigation.navigate('screenConPayDeposit')}>
                        <Image square source={require('./../images/iconButtonPay.png')} style={{ width: 20, height: 17 }} />
                        <Text uppercase={false} style={{ color: '#fff', paddingLeft: 7 }}>Pay Deposit</Text>
                    </Button>
                </Content>

                <Footers
                    Home={() => this.props.navigation.navigate('screenHome')}
                    Message={() => this.props.navigation.navigate('screenMessage')}
                    Schedule={() => this.props.navigation.navigate('screenSchedule')}
                    Me={() => this.props.navigation.navigate('screenMe')}
                />


            </Container>
        )
    }


}



