import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Image } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Platform } from "react-native";
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch, Picker, Button, Title, Input, Item, Thumbnail } from 'native-base';
import { Headers, Footers } from './Common';
import { Search as styles } from './Styles/StyleHome';
const Items = Picker.Item;
let { width } = Dimensions.get('window');

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "01-02-2018",
            time: '00:00',
            city: "Distric 1, HCM",
            Age: "Age 1",
            text: 'Useless Placeholder',
        }
    }

    render() {
        let arraySearch = [{
            city: this.state.city,
            Age: this.state.Age,
            date: this.state.date,
            time: this.state.time,
        }];

        return (
            
            <Container>

                <Headers
                    title="Search"
                    Arrow={true}
                    IconSearch={false}
                    backgroundColor="#F5F3F3"
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <Content style={styles.Content01}>
                    <View style={{backgroundColor: '#fff'}}>
                        <View style={styles.ViewBox}>
                            <Text style={styles.Label}>City</Text>
                            <Picker
                                mode="dialog"
                                Value={this.state.city}
                                onValueChange={(city) => { this.setState({ city: city }) }}
                                style={styles.picker}
                                itemTextStyle={{ fontSize: 14, color: '#707070' }}
                                prompt="Distric"
                            >
                                <Items color='#707070' label="Distric 1, HCM" value="Distric 1, HCM" />
                                <Items color='#707070' label="Distric 2, HCM" value="Distric 2, HCM" />
                                <Items color='#707070' label="Distric 3, HCM" value="Distric 3, HCM" />
                                <Items color='#707070' label="Distric 4, HCM" value="Distric 4, HCM" />
                                <Items color='#707070' label="Distric 5, HCM" value="Distric 5, HCM" />

                            </Picker>
                            <Text style={styles.ChangeText}>{this.state.city}</Text>
                            <Image source={require('./../images/ArrowForm.png')} style={styles.iconPicture} />
                            
                        </View>
                    </View>
                    {/* ====== End City ======= */}

                    <View style={{backgroundColor: '#fff'}}>
                        <View style={[styles.ViewBox, { borderBottomWidth: 0 }]}>
                            <Text style={styles.Label}>Children Age</Text>
                            <Picker
                                mode="dialog"
                                Value={this.state.Age}
                                onValueChange={(Age) => { this.setState({ Age: Age }) }}
                                style={styles.picker}
                                itemTextStyle={{ fontSize: 14, color: '#707070' }}
                                prompt="Age"
                            >
                                <Items color='#707070' label="Age 1" value="Age 1" />
                                <Items color='#707070' label="Age 2" value="Age 2" />
                                <Items color='#707070' label="Age 3" value="Age 3" />
                                <Items color='#707070' label="Age 4" value="Age 4" />
                                <Items color='#707070' label="Age 5" value="Age 5" />

                            </Picker>
                            <Text style={styles.ChangeText}>{this.state.Age}</Text>
                            <Image source={require('./../images/ArrowForm.png')} style={styles.iconPicture} />
                        </View>
                    </View>
                    {/* ====== End Children ======= */}

                    <Button iconRight transparent style={{ alignSelf: 'flex-end' }}>
                        <Text style={{ fontSize: 14, color: '#707070', fontWeight: 'bold' }}> Add more children </Text>
                        <Icon name='md-add' style={{ color: '#707070', marginLeft: 5 }} />
                    </Button>
                    {/* ====== End Add More Children ======= */}

                    <View style={{backgroundColor: '#fff', marginTop: 40}}>
                        <View style={styles.ViewBox}>
                            <Text style={styles.Label}>Date</Text>
                            <DatePicker
                                style={{ flex: 1, opacity: 0 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                showIcon={false}
                                format="DD-MM-YYYY"
                                minDate="01-02-2018"
                                maxDate="01-12-2018"

                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 0,
                                        borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                            <Text style={styles.ChangeText}>{this.state.date}</Text>
                            <Image source={require('./../images/ArrowForm.png')} style={styles.iconPicture} />
                        </View>
                    </View>
                    {/* ====== End Date ======= */}

                    <View style={{backgroundColor: '#fff'}}>                
                        <View style={[styles.ViewBox, { borderBottomWidth: 0 }]}>
                            <Text style={styles.Label}>Time</Text>
                            <DatePicker
                                style={{ flex: 1, opacity: 0 }}
                                date={this.state.time}
                                mode="time"
                                minDate="00:00"
                                placeholder="Time"
                                showIcon={false}
                                is24Hour={true}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 0,
                                        borderWidth: 0
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(time) => { this.setState({ time: time }) }}
                            />
                            <Text style={styles.ChangeText}>{this.state.time}</Text>
                            <Image source={require('./../images/ArrowForm.png')} style={styles.iconPicture} />
                        </View>
                    </View>
                    {/* ====== End Time ======= */}

                    <Button transparent style={{ alignSelf: 'center' }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 14, color: '#707070' }}>Set more details</Text>
                    </Button>

                    <Button iconLeft rounded style={{ marginBottom: 20, marginTop: 20, alignSelf: 'center', paddingLeft: 40, paddingRight: 40, backgroundColor: '#ff7f88' }}
                        onPress={() => this.handleSearch(arraySearch)}
                        onPress={() => this.props.navigation.navigate('screenResult', arraySearch)}
                    >
                        <Icon name='md-search' />
                        <Text style={{ color: '#fff', marginLeft: 10 }}>Search Shitter</Text>
                    </Button>
                </Content>


            </Container>
        )
    }
}