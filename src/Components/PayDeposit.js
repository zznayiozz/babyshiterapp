import React from 'react';
import { TextInput } from 'react-native';

import {
    Container, Content,
    Icon, Text, Header, List, ListItem, Left, Body, Right, Thumbnail,
    Badge, Button, Col, Row, Grid, Title
} from 'native-base';
import { ListItems, ListData } from './../Mockdata/index';
import { Headers, Footers } from './Common';
import { StatusBar, View, Image } from 'react-native';
import { PayDeposit as styles } from './Styles/StyleHome';

import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
} from 'react-native-popup-dialog';
const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

export default class PayDeposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isButton: true,
            isButtonActive: true,
            upComming: { transform: ([{ scale: 1.1 }]), zIndex: 10 },
            Past: ''
        }
    }

    showScaleAnimationDialog = () => {
        this.scaleAnimationDialog.show();
    }

    showSlideAnimationDialog = () => {
        this.slideAnimationDialog.show();
    }

    showFadeAnimationDialog = () => {
        this.fadeAnimationDialog.show();
    }

    render() {
        return (
            <Container>
                <Headers
                    title="Pay Deposit"
                    Arrow={true}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    goBack={() => { this.props.navigation.goBack(0); }}
                />
                <StatusBar hidden={true} />

                <Content style={{ backgroundColor: '#fff' }}>
                    {this.information('#ffffff', true,  14, '#707070', 'Your total is')}
                    {this.information('#F5F3F3', false, 18, '#274D7A', 'VND 300,000')}
                    {this.information('#ffffff', false, 14, '#707070', 'You are going to pay deposit (10%)')}
                    {this.information('#F5F3F3', false, 18, '#274D7A', 'VND 30,000')}

                  
                    <View style={styles.Container}>
                        <Text style={styles.ChosePayment}>Chose your payment method</Text>
                        <View style={styles.ButtonCard}>
                            <Button transparent style={styles.card}>
                                <Thumbnail square source={require('./../images/iconBank.png')} style={styles.card} />
                            </Button>
                            <Button transparent style={styles.card}>
                                <Thumbnail square source={require('./../images/iconCart.png')} style={styles.card} />
                            </Button>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.cardNumber}>Card number:</Text>
                            <TextInput
                                style={styles.TextInputStyle}
                                underlineColorAndroid={0}
                                placeholder="Put your card number here"
                                onChangeText={(cardNumber) => this.setState({ cardNumber })}
                                value={this.state.cardNumber}
                            />

                            <Text style={styles.cardHolder}>Card Holder Name:</Text>
                            <TextInput
                                style={styles.TextInputStyle}
                                underlineColorAndroid={0}
                                placeholder="Put your card number here"
                                onChangeText={(cardName) => this.setState({ cardName })}
                                value={this.state.cardName}
                            />

                            <View style={styles.box02}>
                                <View>
                                    <Text style={styles.ExpireDate}>Expire Date:</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput
                                            style={{
                                                height: 30,
                                                fontWeight: 'bold',
                                                borderColor: 'gray', borderBottomWidth: 1,
                                                textAlign: 'center'
                                            }}
                                            underlineColorAndroid={0}
                                            placeholder="DD"
                                            onChangeText={(isDay) => this.setState({ isDay })}
                                            value={this.state.isDay}
                                        />

                                        <TextInput
                                            style={styles.textInputExpireDate}
                                            underlineColorAndroid={0}
                                            placeholder="MM"
                                            onChangeText={(isMonth) => this.setState({ isMonth })}
                                            value={this.state.isMonth}
                                        />

                                        <TextInput
                                            style={styles.textInputExpireDate}
                                            underlineColorAndroid={0}
                                            placeholder="YY"
                                            onChangeText={(isYear) => this.setState({ isYear })}
                                            value={this.state.isYear}
                                        />
                                    </View>
                                </View>

                                <View style={{ marginLeft: 30 }}>
                                    <Text style={styles.ExpireDate}>CCV:</Text>
                                    <TextInput
                                        style={styles.CCV}
                                        underlineColorAndroid={0}
                                        placeholder="3 digit"
                                        onChangeText={(text) => this.setState({ text })}
                                        value={this.state.text}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <Button iconLeft rounded transparent style={styles.buttonPayDeposit}
                        onPress={this.showScaleAnimationDialog}>
                        <Image square source={require('./../images/iconButtonPay.png')} style={{ width: 20, height: 17 }} />
                        <Text uppercase={false} style={{ color: '#fff' }}>Pay Deposit</Text>
                    </Button>
                </Content>
                <Footers
                    Home={() => this.props.navigation.navigate('screenHome')}
                    Message={() => this.props.navigation.navigate('screenMessage')}
                    Schedule={() => this.props.navigation.navigate('screenSchedule')}
                    Me={() => this.props.navigation.navigate('screenMe')}
                />
                <PopupDialog
                    ref={(popupDialog) => { this.scaleAnimationDialog = popupDialog; }}
                    dialogAnimation={scaleAnimation}
                    dialogTitle={<DialogTitle title="You have succesfully paid deposit VND 30,000 to" />}
                    overlayBackgroundColor={'#000'}
                    overlayOpacity={0.7}
                    width={0.85}
                    height={0.8}
                    actions={[
                        <DialogButton
                            text='X'
                            onPress={() => {
                                this.scaleAnimationDialog.dismiss();
                            }}
                            key="button-1"
                            align='right'

                        />,
                    ]} >
                    <View style={styles.dialogContentView}>
                        <Body>
                            <Text style={{ marginTop: 20, marginBottom: 5, fontSize: 10, textDecorationLine: 'underline' }}>Ms.Minh</Text>
                            <Thumbnail source={require('./../images/avarta.png')} style={{ width: 40, height: 40 }} />
                            <Text style={{ marginTop: 10, fontSize: 12, color: '#707070', fontWeight: 'bold' }}>11/12/2018 - 11/12/2018</Text>
                            <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>11:00 ~ 12:00</Text>
                            <Text style={{ marginTop: 20, fontSize: 12, color: '#274D7A', fontWeight: 'bold' }}>Thank you so much !</Text>
                            <Text style={{ marginTop: 60, fontSize: 12, color: '#707070' }}>Want to find shitter for another days?</Text>


                            <Button iconLeft rounded style={{ backgroundColor: '#ff7f88', height: 35, marginTop: 20, alignSelf: 'center' }}
                                onPress={() => this.props.navigation.navigate('screenSearch')}>
                                <Icon name='md-search' />
                                <Text style={{ fontSize: 12 }}>Search Shitter</Text>
                            </Button>

                        </Body>
                    </View>
                </PopupDialog>
            </Container>
        )
    }

    information = (backgroundColor, iconshow = true, fontSize, colorFont, label) => {
        let picture = (iconshow) ?
            <Thumbnail square source={require('./../images/iconPay.png')} style={{ width: 35, height: 30 }} /> :
            <Text style={{height: 0}}></Text> ;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: backgroundColor }}>
                {picture}
                <Text style={{ color: colorFont, fontSize: fontSize, fontWeight: 'bold' }}> {label}</Text>
            </View>
        )
    }
}

