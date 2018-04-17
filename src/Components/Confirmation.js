import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Image, Platform } from 'react-native'
import DatePicker from 'react-native-datepicker'


import {
    Container, Header,
    Content, List, ListItem,
    Icon, Left, Body, Right,
    Switch, Picker, Button,
    Title, Thumbnail, Footer, FooterTab,
    Text, CardItem,
    Card, Input, Item
} from 'native-base';

import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
} from 'react-native-popup-dialog';

import { Headers, Footers } from './Common';
import { Confirmation as styles } from './Styles/StyleHome';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

let { width } = Dimensions.get('window');

export default class Confirmation extends Component {
   
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
            <Container style={styles.BackgroundWhite}>
                <Headers
                    title="Confirmation"
                    Arrow={true}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <Content style={{ marginTop: 10 }}>

                    <View style={[styles.CommonBox, { alignSelf: 'center' }]}>
                        <View style={{ flex: 1, flexDirection: 'column', width: 216 }}>
                            <Image style={{
                                alignSelf: 'center', width: 24, height: 20,
                                marginTop: 20, marginBottom: 20
                            }} source={require('./../images/baby.png')} />

                            {this.ViewTime('Date', '11/2/2018 - 11/2/2018')}
                            {this.ViewTime('Time', '11 : 00 - 12 : 00')}
                            {this.ViewTime('Price', '270,000VND')}
                            {this.ViewTime('Your Shitter', '')}

                            <Thumbnail small style={{ width: 50, height: 50, alignSelf: 'center' }}
                                source={require('./../images/AvartaProfile.png')} />
                            <Text style={{ color: '#959595', fontSize: 12, alignSelf: 'center' }}>Minh</Text>
                        </View>
                    </View>


                    <View style={{ width: 216, justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', marginTop: 20 }}>
                     

                        <TextInput
                            style={styles.stylesInput}
                            placeholder="write a massege to this shitter"
                            placeholderTextColor = '#CBCBCB'
                            underlineColorAndroid={0}
                        />

                        {this.Buttons(this.showScaleAnimationDialog, 'Send Offer', 'md-search', 216, 40, '#4a90e2', false)}

                        <Text style={{ fontSize: 12, marginTop: 20, alignSelf: 'center', color: '#707070' }}>Want to change the date or time ?</Text>

                        {this.Buttons(() => this.props.navigation.navigate('screenSearch'), 'Search Shitter', 'md-search', 216, 40, '#FF7F88')}

                        <Button iconLeft transparent style={{ alignSelf: 'center' }}
                            onPress={() => this.props.navigation.navigate('screenResult')}>
                            <Thumbnail style={{ marginTop: 4, width: 8, height: 14, marginLeft: 10 }} source={require('./../images/arrowConfir.png')} />
                            <Text uppercase={false} style={{ fontSize: 12, color: '#707070', textDecorationLine: 'underline', fontWeight: '300' }}>Go Back to Shitter lists</Text>
                        </Button>
                    </View>
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
                    dialogTitle={<DialogTitle title="You offer has been sent to" />}
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
                            <Text style={{ margin: 20, fontSize: 12, color: '#274D7A', fontWeight: 'bold' }}>Please wait for a while till</Text>
                            <Text style={{ fontSize: 12, color: '#274D7A', fontWeight: 'bold' }}>your shitter accept your offer</Text>
                            <Text style={{ marginTop: 60, fontSize: 12, color: '#707070', fontWeight: 'bold' }}>Want to find shitter for another days?</Text>
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

    ViewTime = (label, content) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text note style={styles.styleText}>{label} : </Text>
                <Text note style={[styles.styleText, { marginLeft: 25 }]}>{content}</Text>
            </View>
        )
    }

    Buttons = (Event, name, icon, width = 216, height = 40, bgColor, picOricon = true) => {
        let result = (picOricon) ?
            <Icon name={icon} style={{ marginRight: 10 }} /> :
            <Image tintColor="#fff" style={{ width: 24, height: 20, tintColor: '#fff', marginRight: 10 }} source={require('./../images/baby.png')} />;

        return (
            <Button rounded
                style={{
                    backgroundColor: bgColor,
                    width: width,
                    height: height,
                    marginTop: 20,
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}
                onPress={Event}>

                {result}

                <Text uppercase={false} style={{ fontSize: 12, lineHeight: 12, fontWeight: 'bold', paddingLeft: 0 }}>{name}</Text>
            </Button>
        )
    };

    ButtonGoBack = () => (
        <Button transparent onPress={() => { this.props.navigation.goBack(0) }}>
            <Icon name='arrow-back' />
        </Button>
    );

}