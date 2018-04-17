import React from 'react';
import { Image, Dimensions, StyleSheet, Easing, StatusBar, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon, Card, CardItem, Grid, Row, Button, Footer, Left, H3, Right, Title } from 'native-base';
import { ListItems } from './../Mockdata/index';
import { Headers } from './Common';
import Expo from "expo";
import { Home as styles } from './Styles/StyleHome';
import Rating from 'react-native-rating'

let { width, height } = Dimensions.get('window');

const images = {
    starFilled: require('../../assets/star_filled.png'),
    starUnfilled: require('../../assets/star_unfilled.png')
}
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 3,
            isMore: 'See more'
        }
    }

    static navigationOptions = {
        tabBarLabel: "Home",
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => {
            return <Image source={require('./../images/iconHome.png')} style={{ width: 29, height: 36, tintColor: tintColor }} />
        },
    };

    async componentWillMount() {
        await this.listItem(ListItems);
    };

    listItem = (ListItems) => {
        let items = ListItems.map((val, key) => {
            if (key <= this.state.key) {
                return (
                    <ListItem avatar  key={key} style={styles.ListItems} onPress={() => this.props.navigation.navigate('screenSignUp')}>
                        <Left style={{ flexDirection: 'column', justifyContent: 'center',  alignItems: 'center' }}>
                            <Thumbnail small source={val.thmbanil} style={{ width: 50, height: 50, }} />
                            <Text style={{ marginLeft: 0, color: '#959595', fontSize: 12, fontWeight: 'bold', textDecorationLine: 'underline'}}>Minh</Text>
                        </Left>
                        <Body style={{ borderBottomWidth: 0, paddingTop: 0, paddingBottom: 0, }}>
                            <Rating
                                initial={5}
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
                                    marginRight: 5
                                }}
                            />
                            <Text note style={{ fontSize: 10, marginTop: 2, textDecorationLine: 'underline' }}>600 reviews</Text>
                            <Text note style={{ fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Distric 1, HCMC</Text>
                        </Body>
                    </ListItem>
                )
            }
        });
        return items;
    }

    handleSeeMore = () => {
        (this.state.key === 3) ? 
        this.setState({key: 9,isMore: 'View short'}) : 
        this.setState({key: 3,isMore: 'See More'})
    }

    TopTen = (text) => (
        <Button iconRight transparent style={{ marginTop: 15, marginBottom: 5, height: 20 }}>
            <Text style={{ color: '#2c517d', fontSize: 12 }} uppercase={false}>{text}</Text>
            <Icon name='md-search' style={{ color: '#707070', fontSize: 15, marginLeft: -10, marginTop: 3 }}
                onPress={() => this.props.navigation.navigate('screenSearch')}
            />
        </Button>
    );

    ButtonMore = (text) => (
        <Button transparent style={{ alignSelf: 'center', marginTop: -10 }}
            onPress={() => this.handleSeeMore()}>
            <Text style={styles.ButtonMore} uppercase={false}> {text} </Text>
        </Button>
    );

    ButtonSearch = () => (
        <Button iconLeft full rounded style={styles.buttonSearch}
            onPress={() => this.props.navigation.navigate('screenSearch')}>
            <Icon name='md-search' style={{ fontSize: 20 }} />
            <Text uppercase={false}>Search Shitter</Text>
        </Button>
    );

    render() { 
        return (
            <Container>
                <StatusBar hidden={true} />
                <Headers
                    Arrow={false}
                    IconSearch={true}
                    backgroundColor="transparent"
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <Content>
                    <View style={styles.getOff}>
                        <Text style={styles.textOff}>Get 50% OFF</Text>
                    </View>

                    {this.TopTen('Top 10 Shitter in HCMC')}

                    <List style={styles.buttonContainer}>
                        {this.listItem(ListItems)}
                        {this.ButtonMore(this.state.isMore)}
                    </List>

                    {this.ButtonSearch()}
                </Content>
            </Container>
        );
    }

    

}

