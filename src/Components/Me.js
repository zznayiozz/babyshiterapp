import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { Container, Content, Icon, Text, Header, List, ListItem, Left, Body, Right, Thumbnail, Badge, Button, Col, Row, Grid } from 'native-base';
import { Me as styles } from './Styles/StyleHome';

let { width } = Dimensions.get('window');

export default class Me extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Me",
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return <Image source={require('./../images/iconMe.png')} style={{ width: 18, height: 36, tintColor: tintColor }} />
        }
    };

    render() {
        return (
            <Container>
                <View style={styles.Box}>
                    <View style={styles.myAccouse}>
                        <Text style={styles.myName}>Yuki</Text>

                        <Thumbnail source={require('./../images/AvartaProfile.png')} style={{ alignSelf: 'center' }} />
                        <Button transparent iconLeft style={{ alignSelf: 'center' }}>
                            <Text uppercase={false} style={styles.editProfileText}>Edit Profile</Text>
                            <Icon name="md-create" style={styles.editProfileIcon} />
                        </Button>

                        {this.Mybutton(0, 'Account Setting')}
                        {this.Mybutton(1, 'Payment Setting')}
                        
                    </View>

                    {this.Buttons('About Us')}
                    {this.Buttons('Q&A')}
                    {this.Buttons('Privacy')}
                    {this.Buttons('Log out')}
                </View>
            </Container>
        );
    }

    Mybutton = (number, label) => {
        let Images = [
            require('./../images/iconSetting.png'),
            require('./../images/iconCard.png'),
        ];

        return (
            <Button transparent iconRight style={{ alignSelf: 'center' }}>
                <Thumbnail square source={Images[number]} style={styles.AccountSettingIcon} />
                <Text uppercase={false} style={styles.AccountSettingText}>{label}</Text>
            </Button>
        )
    }

    Buttons = (label) => (
        <Button transparent style={{ alignSelf: 'center', width: 160 }}>
            <Text uppercase={false} style={{ fontSize: 14, color: '#313131', fontWeight: 'bold' }}>{label}</Text>
        </Button>
    )
}
