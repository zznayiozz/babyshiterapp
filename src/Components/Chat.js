import React from 'react';
import {

    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput,

} from 'react-native';
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
import { Chat as styles } from './Styles/StyleHome';

let { width, height } = Dimensions.get('window');

export default class Chat extends React.Component {
   
    render() {
        return (
            <Container>
                <Headers
                    title="Minh"
                    Arrow={true}
                    IconSearch={true}
                    backgroundColor="#F5F3F3"
                    navigate={() => this.props.navigation.navigate('screenSearch')}
                    goBack={() => { this.props.navigation.goBack(0); }}
                />

                <Content>
                    <View style={styles.container}>
                        <View style={styles.viewBox}>
                            <Thumbnail source={require('./../images/AvartaProfile.png')} style={styles.Thumbnail} />
                            <Text style={styles.textName}>Minh</Text>
                        </View>

                        <View style={styles.contentMail}>
                            <Image
                                source={require('./../images/bgChat.png')}
                                style={styles.bgArrow} />

                            <View style={styles.bgContent}>
                                <Text style={styles.linkConfirm}>
                                    Hi, i have accepted your offer. Please confirm from below link
                                </Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('screenCongratulations')}>
                                    <Text style={styles.buttonLink}>
                                        Click here to confirm
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.timeSenBox}>
                            <Text style={styles.timeText}>11/2/2018</Text>
                        </View>
                    </View>
                </Content>

                <Footers
                    Home={() => this.props.navigation.navigate('screenHome')}
                    Message={() => this.props.navigation.navigate('screenMessage')}
                    Schedule={() => this.props.navigation.navigate('screenSchedule')}
                    Me={() => this.props.navigation.navigate('screenMe')}
                />
            </Container>
        );
    }
}

