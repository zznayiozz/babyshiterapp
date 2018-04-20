import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput,

} from 'react-native';
import { Button, Header, CheckBox, Icon } from 'native-base';
import { LinearGradient } from 'expo';
import { SignUp as styles } from './Styles/StyleHome';
import { Input } from './Common';
let { width, height } = Dimensions.get('window');

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckBox: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={true} />

                <Image source={require('./../images/BgSignUp.png')}
                    style={{
                        width: '100%',
                        height: height,
                        position: 'absolute',

                    }} />

                <LinearGradient
                    colors={['#ffdfe1', '#ffdfe1', '#fff']}
                    style={styles.LinearGradientBG}>
                </LinearGradient>

                <Button transparent onPress={() => { this.props.navigation.goBack(0) }}>
                    <Icon name='arrow-back'
                        style={{ color: '#000' }} />
                </Button>

                <View style={styles.Content}>
                    <View style={styles.Avarta}>
                        <Image source={require('./../images/baby.png')} />
                    </View>

                    <Text style={styles.TextWelcome}>Welcome to Lmiee !</Text>

                    <View style={{ marginTop: 20 }}>
                        <Input placeholder='Name' style={styles.Form} />
                        <Input placeholder='Email Address' style={styles.Form} />
                        <Input placeholder='Phone Number' style={styles.Form} />

                        <View style={styles.checkBox}>
                            <CheckBox checked={this.state.isCheckBox} style={{ marginLeft: -10 }}
                                onPress={() => { this.setState({ isCheckBox: !this.state.isCheckBox }) }} />
                            <Text style={styles.checkText}>I agree with terms & Privacy</Text>
                        </View>

                        <View style={{ marginTop: 30 }}>
                            <Button rounded style={styles.buttonSign}
                                onPress={() => this.props.navigation.navigate('screenProfile')}>
                                <Text style={styles.textButton}>sign in</Text>
                            </Button>

                            <Text style={styles.signOther}>Sign up with SNS Accounts</Text>

                            <View style={styles.iconSocial}>
                                <Image source={require('./../images/SignFaceBook.png')} style={{ width: 40, height: 40, margin: 5 }} />
                                <Image source={require('./../images/SignG.png')} style={{ width: 42, height: 41, margin: 5 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

