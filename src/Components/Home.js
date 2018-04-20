import React from 'react';
import { Image, Dimensions, StyleSheet, Easing, StatusBar, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon, Card, CardItem, Grid, Row, Button, Footer, Left, H3, Right, Title } from 'native-base';

import { Headers } from './Common';
import { Home as styles } from './Styles/StyleHome';
import Rating from 'react-native-rating'
import { connect } from 'react-redux';
import { actionToggleList } from './../redux/Action/index';

let { width, height } = Dimensions.get('window');
const images = {
    starFilled: require('../../assets/star_filled.png'),
    starUnfilled: require('../../assets/star_unfilled.png')
}
class Home extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Home",
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => {
            return <Image source={require('./../images/iconHome.png')} style={{ width: 29, height: 36, tintColor: tintColor }} />
        },
    };

    listItem = () => {
        let { ListItems, isNumber } = this.props.contentHome;
        let Toggle = (isNumber) ? 3 : 9;
        let items = ListItems.map((val, key) => {
            if (key <= Toggle) {
                return (
                    <ListItem avatar key={key} style={styles.ListItems} onPress={() => this.props.navigation.navigate('screenSignUp')}>
                        <Left style={styles.ListItemLeft}>
                            <Thumbnail small source={val.thmbanil} style={{ width: 50, height: 50, }} />
                            <Text style={styles.nameUser}>{val.name}</Text>
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
                            <Text note style={styles.textReview}>{val.review}</Text>
                            <Text note style={styles.textDistric}>{val.note}</Text>
                        </Body>
                    </ListItem>
                )
            }
        });
        return items;
    }

    TopTen = (text) => (
        <Button iconRight transparent style={{ marginTop: 15, marginBottom: 5, height: 20 }}>
            <Text style={{ color: '#2c517d', fontSize: 12 }} uppercase={false}>{text}</Text>
            <Icon name='md-search' style={{ color: '#707070', fontSize: 15, marginLeft: -10, marginTop: 3 }}
                onPress={() => this.props.navigation.navigate('screenSearch')}
            />
        </Button>
    );

    isMoreList = () => { this.props.isMoreList(); }

    ButtonMore = (text) => (
        <Button transparent style={{ alignSelf: 'center', marginTop: -10 }}
            onPress={() => this.isMoreList()}>
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
                        {this.listItem()}
                        {this.ButtonMore(this.props.contentHome.isMore)}
                    </List>

                    {this.ButtonSearch()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({ contentHome: state.contentHome })

const mapDispatchToProps = (dispatch, ownProps) => ({
    isMoreList: () => {
        dispatch(actionToggleList());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)