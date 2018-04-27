import React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Header, Text, Body, Icon, Button, Left, Right, Title, Footer, FooterTab, Thumbnail, ListItem } from 'native-base';
import { Schedule as styles } from './Styles/StyleHome';
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

export class ButtonSlider extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props._onPress}
                hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

export class Input extends React.Component {
    render() {
        return (
            <TextInput
                underlineColorAndroid='transparent'
                placeholder={this.props.placeholder} 
                style={this.props.style}/>
        )
    }
}

export class Buttons extends React.Component {
    render() {
        return (
            <Button block transparent style={[styles.ButtonUpcomming, this.props.background, this.props.style]}
                onPress={this.props.onPress}>
                <Text style={[{ fontWeight: 'bold' }, this.props.color]}> {this.props.name} </Text>
            </Button>
        )
    }
}

export class ListItemUpcomming extends React.Component {
    render() {
        return (
            <ListItem style={{ marginLeft: 0 }}>
                <Body style={{ flex: 40, alignItems: 'center' }}>
                    <Thumbnail source={this.props.source} />
                    <Text style={styles.UpcommingText}>{this.props.title}</Text>
                </Body>
                <Body style={{ flex: 70 }}>
                    <Text style={[styles.UpcommingText, { justifyContent: 'flex-start' }]}>{this.props.date}</Text>
                    <Text style={styles.UpcommingText}>{this.props.time}</Text>
                    <Text style={styles.UpcommingText}>{this.props.price}VNDx{this.props.timeWork} = {this.props.total}VND</Text>
                    <Button onPress={this.props._onClick} rounded style={[styles.UpcommingButton, this.props.backgroundColor]}>
                        <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}> {this.props.status} </Text>
                    </Button>
                </Body>
            </ListItem>
        )
    }
}

export class ListItemPast extends React.Component {
    render() {
        return (
            <ListItem style={{ marginLeft: 0 }}>
                <Body style={{ flex: 40, alignItems: 'center' }}>
                    <Thumbnail small source={this.props.source} />
                    <Text style={styles.UpcommingText}>Kumar Pratik</Text>
                </Body>
                <Body style={{ flex: 70 }}>
                    <Text style={[styles.UpcommingText, { justifyContent: 'flex-start' }]}>{this.props.date}</Text>
                    <Text style={styles.UpcommingText}>{this.props.time}</Text>
                    <Text style={styles.UpcommingText}>{this.props.price}VNDx{this.props.timeWork} = {this.props.total}VND</Text>
                </Body>
            </ListItem>
        )
    }
}