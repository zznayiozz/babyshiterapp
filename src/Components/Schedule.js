import React from 'react';
import { Container, Content, Icon, Header, List, ListItem, Left, Body, Right, Thumbnail, Badge, Button, Col, Row, Grid, Title } from 'native-base';
import { ListItems, ListData } from './../Mockdata/index';
import { Headers } from './Common';
import { StatusBar, View, Text, Image } from 'react-native';
import { Schedule as styles } from './Styles/StyleHome';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isButton: true,
            isButtonActive: true,
            upComming: { transform: ([{ scale: 1.1 }]), zIndex: 10 },
            Past: ''
        }
    }

    static navigationOptions = {
        tabBarLabel: "Schedule",
        tabBarIcon: ({ tintColor }) => {
            return <Image source={require('./../images/iconSchedude.png')} style={{ width: 36, height: 36, tintColor: tintColor }} />
        }

    };

    listItemUpcomming = (ListData) => {
        let items = ListData.map((val, key) => {
            let bgColor = (val.status !== "Pay Deposit") ? '#FF7F88' : '#4A90E2';

            return (
                <ListItem style={{ marginLeft: 0 }} key={key}>
                    <Body style={{ flex: 40, alignItems: 'center' }}>
                        <Thumbnail source={val.thmbanil} />
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>{val.title}</Text>
                    </Body>
                    <Body style={{ flex: 70 }}>
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold', justifyContent: 'flex-start' }}>14/02/2019 ~ 14/02/2019</Text>
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>17:00 ~ 20:00</Text>
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>180,000VNDx3 = 540,000VND</Text>
                        <Button
                            onPress={() => this.props.navigation.navigate('screenConPayDeposit')}
                            rounded
                            style={{
                                marginTop: 10,
                                height: 20,
                                paddingLeft: 20,
                                paddingRight: 20,
                                justifyContent: 'center',
                                backgroundColor: bgColor
                            }}
                        >
                            <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}> {val.status} </Text>
                        </Button>
                    </Body>

                </ListItem>
            )
        });
        return items;
    }

    listItemPast = (ListItems) => {
        let items = ListItems.map((val, key) => {
            return (
                <ListItem style={{ marginLeft: 0 }} key={key}>
                    <Body style={{ flex: 40, alignItems: 'center' }}>
                        <Thumbnail small source={val.thmbanil} />
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>Kumar Pratik</Text>
                    </Body>
                    <Body style={{ flex: 70 }}>
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold', justifyContent: 'flex-start' }}>14/02/2019 ~ 14/02/2019</Text>
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>17:00 ~ 20:00</Text>
                        <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>180,000VNDx3 = 540,000VND</Text>
                    </Body>
                </ListItem>
            )
        });
        return items;
    }

    HandleUpcomming = () => {
        this.setState({
            isButton: true,
            isButtonActive: true,
            upComming: { transform: ([{ scale: 1.1 }]), zIndex: 10 },
            Past: ''
        });
    }

    HandlePast = () => {
        this.setState({
            isButton: false,
            isButtonActive: false,
            upComming: '',
            Past: { transform: ([{ scale: 1.1 }]), zIndex: 10 },
        });

    }

    ListHandle = (isButton) => {
        let list = null;
        list = (isButton) ?
            this.listItemUpcomming(ListData) :
            this.listItemPast(ListItems);

        return (
            <Content>
                <List>
                    {list}
                </List>
            </Content>
        )
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Headers
                    title="Schedule"
                    Arrow={false}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <View style={{ flexDirection: 'row' }}>

                    <Button block transparent style={[styles.ButtonUpcomming, this.state.upComming]}
                        onPress={() => this.HandleUpcomming()}>
                        <Text style={{ color: '#ff7f88', fontWeight: 'bold' }}> Upcomming </Text>
                    </Button>

                    <Button block transparent style={[styles.ButtonPast, this.state.Past]}
                        onPress={() => this.HandlePast()}>
                        <Text style={{ color: '#274d7a', fontWeight: 'bold' }}> Past </Text>
                    </Button>

                </View>

                {this.ListHandle(this.state.isButton)}
            </Container>

        )

    }
}

