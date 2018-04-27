import React from 'react';
import { Container, Content, Icon, Header, List, ListItem, Left, Body, Right, Thumbnail, Badge, Button } from 'native-base';
import { connect } from 'react-redux';
import { Headers } from './Common';
import { StatusBar, View, Text, Image } from 'react-native';
import { Schedule as styles } from './Styles/StyleHome';
import { actionSchedule } from './../redux/Action/index';
import { Buttons, ListItemUpcomming, ListItemPast } from './../Components/Common';


class Schedule extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Schedule",
        tabBarIcon: ({ tintColor }) => {
            return <Image source={require('./../images/iconSchedude.png')} style={{ width: 36, height: 36, tintColor: tintColor }} />
        }

    };

    ListUpcomming = (ListData) => {
        let items = '';

        items = ListData.map((val, key) => {
            let total = (val.price * val.timeWork);
            let bgColor = (!val.status) ? '#FF7F88' : '#4A90E2';
            let isText = (val.status) ? "Pay Deposit" : 'Cansel';

            return (
                <ListItemUpcomming _onClick={() => this.props.navigation.navigate('screenConPayDeposit')}
                    key={key}
                    source={val.Avarta}
                    title={val.title}
                    date={val.date}
                    time={val.time}
                    price={val.price}
                    timeWork={val.timeWork}
                    total={total}
                    status={isText}
                    backgroundColor={{ backgroundColor: bgColor }}
                />
            )
        });
        return items;
    }

    ListPast = (ListData) => {
        let items = '';
        items = ListData.map((val, key) => {
            let total = (val.price * val.timeWork);
            return (
                <ListItemPast
                    key={key}
                    source={val.Avarta}
                    date={val.date}
                    time={val.time}
                    price={val.price}
                    timeWork={val.timeWork}
                    total={total}
                />
            )
        });
        return items;
    }


    isActive = (param) => { this.props.isActive(param) }


    HandleActive() {
        let { isData, isButtonActive } = this.props.contentSchedule;
        let dataList = (isButtonActive) ? this.ListUpcomming(isData) : this.ListPast(isData);
        return dataList;
    }

    handleButton(active) {
        let { AnimateActive } = this.props.contentSchedule;
        let activeButton1 = (active) ? AnimateActive : '';
        let activeButton2 = (!active) ? AnimateActive : '';
        return (
            <View style={{ flexDirection: 'row' }}>
                <Buttons
                    style={activeButton1}
                    name='Upcomming'
                    color={{ color: '#FF7F88' }}
                    background={{ backgroundColor: '#FADFE1', borderBottomColor: '#FF7F88' }}
                    onPress={() => this.isActive('Button01')} />


                <Buttons
                    style={activeButton2}
                    name='Past'
                    color={{ color: '#274D7A' }}
                    background={{ backgroundColor: '#D2E4F8', borderBottomColor: '#274D7A' }}
                    onPress={() => this.isActive('Button02')} />
            </View>
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
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => {this.props.navigation.goBack(0) }}
                />

                {this.handleButton(this.props.contentSchedule.isButtonActive)}

                <Content>
                    <List>
                        {this.HandleActive()}
                    </List>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({ contentSchedule: state.contentSchedule })

const mapDispatchToProps = (dispatch, ownProps) => ({
    isActive: (param) => {
        dispatch(actionSchedule(param));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
