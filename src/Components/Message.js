import React from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Icon, Text, Header, List, ListItem, Left, Body, Right, Thumbnail, Badge, Button, Title } from 'native-base';
import { Headers } from './Common';
import { Message as styles } from './Styles/StyleHome';
import { connect } from 'react-redux';
import { actionNavigation } from './../redux/Action/index';



class Message extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Message",
        tabBarIcon: ({ tintColor }) => {
            return <Image source={require('./../images/iconMessage.png')} style={{ width: 34, height: 36, tintColor: tintColor }} />
        }
    };


    listItems = (Items) => {
        items = Items.map((val, key) => {
            return (
                <ListItem avatar key={key} style={{ paddingBottom: 10 }}
                    onPress={() => this.props.navigation.navigate('screenChat')}>
                    <Left>
                        <Thumbnail small source={val.thmbanil} />
                        <View style={styles.Badge}>
                            <Text style={styles.numberBadge}>1</Text>
                        </View>
                    </Left>

                    <Body>
                        <Text style={styles.Title}>{val.title}</Text>
                        <Text style={styles.fontSize} note>{val.note}</Text>
                    </Body>
                    <Right>
                        <Text note style={styles.timeDate}>11/10/2018</Text>
                    </Right>
                </ListItem>
            )
        });
        return items;
    }

    render() {

        return (
            <Container>
                <Headers
                    title="Message Box"
                    Arrow={false}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    goBack={() => { this.props.navigation.goBack(0); }}
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                />

                <Content>
                    <List>
                        {this.listItems(this.props.contentMessges)}
                    </List>
                </Content>
            </Container>

        );
    }
}


const mapStateToProps = (state) => ({ contentMessges: state.contentMessge })


export default connect(mapStateToProps, null)(Message)