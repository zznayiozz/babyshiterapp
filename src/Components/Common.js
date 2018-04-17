import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Header, Text, Body, Icon, Button, Left, Right, Title, Footer, FooterTab, Thumbnail } from 'native-base';

let { width } = Dimensions.get('window');

export class Headers extends React.Component {
    ButtonBack(isBack) {
        if (isBack === true) {
            return (
                <Button transparent onPress={this.props.goBack} >
                    <Icon name='arrow-back' style={{ color: '#959595' }} />
                </Button>
            )
        }
        return (<View></View>)
    }

    ButtonSearch(isSearch) {
        if (isSearch === true) {
            return (
                <Button transparent onPress={this.props.navigate} >
                    <Icon name='md-search' style={{ color: '#707070', fontSize: 28 }} />
                </Button>
            )
        }
        return (<View></View>)
    }

    render() {
        return (
            <Header style={{ backgroundColor: this.props.backgroundColor, borderBottomWidth: 0 }}>
                <Left style={{ flex: 2 }}>
                    {this.ButtonBack(this.props.Arrow)}
                </Left>
                <Body style={{ flex: 6 }}>
                    <Title style={{ alignSelf: 'center', color: '#274D7A' }}>{this.props.title}</Title>
                </Body>
                <Right style={{ flex: 2 }}>
                    {this.ButtonSearch(this.props.IconSearch)}
                </Right>
            </Header>
        )
    }
}

export class Footers extends React.Component {
    render() {
        return (
            <Footer>
                <FooterTab style={{ backgroundColor: '#F5F3F3' }}>
                    <Button vertical onPress={this.props.Home} >
                        <Image source={require('./../images/iconHome.png')} style={{ width: 29, height: 36 }} />
                    </Button>
                    <Button vertical onPress={this.props.Message}>
                        <Image source={require('./../images/iconMessage.png')} style={{ width: 34, height: 36 }} />
                    </Button>
                    <Button vertical onPress={this.props.Schedule}>
                        <Image source={require('./../images/iconSchedude.png')} style={{ width: 36, height: 36 }} />
                    </Button>
                    <Button vertical onPress={this.props.Me}>
                        <Image source={require('./../images/iconMe.png')} style={{ width: 18, height: 36 }} />
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}
