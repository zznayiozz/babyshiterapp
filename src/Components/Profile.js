import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Image, Easing, Platform, StatusBar } from 'react-native'
import DatePicker from 'react-native-datepicker'

import {
    Container, Header,
    Content, List,
    ListItem, Icon,
    Left, Body, Right,
    Switch, Picker, Button,
    Title, Thumbnail, Footer,
    FooterTab, Text
} from 'native-base';
import { Headers, Footers } from './Common';
import Rating from 'react-native-rating';
import { Profile as styles } from './Styles/StyleHome';


let { width } = Dimensions.get('window');
const images = {
    starFilled: require('../../assets/star_filled.png'),
    starUnfilled: require('../../assets/star_unfilled.png')
}

export default class Profile extends Component {
    ReviewItem = () => (
        <ListItem avatar style={{ alignItems: 'flex-start', marginTop: 20, marginLeft: 0 }}>
            <Left style={{ flexDirection: 'column' }}>
                <Thumbnail source={require('./../images/AvartaProfile.png')} style={{ width: 50, height: 50 }} />
                <Text note style={{ marginLeft: 0, fontSize: 9, fontWeight: 'bold', fontSize: 14, color: '#959595', marginTop: 5 }}>Minh</Text>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginTop: -10 }}>

                <Rating
                    initial={5}
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
                <Text note style={{ fontSize: 14, color: '#959595', marginTop: 5 }}>She is a very good shitter</Text>
            </Body>
        </ListItem>
    );

    render() { 
        return (
            <Container style={{ backgroundColor: '#fff' }}>
            <StatusBar hidden={true} />
                <Headers
                    title="Minh's Profile"
                    Arrow={true}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <Content>
                    <View style={styles.container}>

                        <List style={styles.infomation}>
                            <ListItem style={styles.listItems}>
                                <Left style={styles.avarta}>
                                    <Thumbnail source={require('./../images/AvartaProfile.png')} style={styles.thumbnail} />
                                    <Rating
                                        initial={5}
                                        selectedStar={images.starFilled}
                                        unselectedStar={images.starUnfilled}
                                        config={{
                                            easing: Easing.inOut(Easing.ease),
                                            duration: 350
                                        }}
                                        stagger={80}
                                        maxScale={1.4}
                                        starStyle={{
                                            width: 16,
                                            height: 15,
                                            margin: 3
                                            
                                        }}
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.textStyles}>Minh,</Text>
                                    <Text style={[styles.textStyles, {marginTop: 7 }]}>District 1, HCMC</Text>
                                    <Left style={styles.iconSocial}>
                                        <Image source={require('./../images/socialFacebook.png')} style={{ width: 20, height: 20 }} />
                                        <Image source={require('./../images/socialTwitter.png')} style={{ width: 25, height: 20.5, marginLeft: 10, marginRight: 10 }} />
                                        <Image source={require('./../images/socialMail.png')} style={{ width: 28, height: 20 }} />
                                    </Left>
                                </Body>
                            </ListItem>
                        </List>
                        {/* End Block List */}

                        <View style={{ width: '100%' }}>
                            <View style={styles.labelAboutBox}>
                                <Text note style={styles.labelAbout}>About</Text>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text note style={styles.contentAbout}>
                                    Hi there, My name is Minh. I have been baby shittering for 2 year.
                                    Please send me a offer if you are interested. {'\n'}
                                    Thank you.</Text>
                            </View>
                        </View>
                        {/* End Block About */}


                        <View style={{ marginTop: 10, width: '100%' }}>
                            <View style={styles.labelAboutBox}>
                                <Text note style={styles.labelAbout}>Skills</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Button rounded small style={styles.ButtonSkills}>
                                    <Text uppercase={false} style={{ color: '#FF7F88' }}>English</Text>
                                </Button>

                                <Button rounded small style={styles.ButtonSkills}>
                                    <Text uppercase={false} style={{ color: '#FF7F88' }}>Japanese</Text>
                                </Button>
                            </View>
                        </View>
                        {/* End Block Skills */}

                        <View style={styles.boxReview}>
                            <View style={styles.boxLabel}>
                                <Text note style={styles.labelReview }>Review</Text>
                            </View>

                            <List>
                                {this.ReviewItem()}
                                {this.ReviewItem()}
                                {this.ReviewItem()}
                            </List>

                            <Button transparent style={{ alignSelf: 'center' }}>
                                <Text uppercase={false} style={styles.buttonSeemore}>See more Reviews</Text>
                            </Button>
                        </View>
                        {/* End Block Review */}
                    </View>

                    <Button style={{ height: 41, justifyContent: 'center' }} full info
                        onPress={() => this.props.navigation.navigate('screenConfirmation')}>
                        <Image source={require('./../images/IconBaby.png')} style={{ width: 112, height: 21 }} />
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


