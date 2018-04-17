import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window');

export const Info = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    Slider: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },


    Picture: {
        borderWidth: 5,
        borderColor: '#ff7f88',
        position: 'relative',
        width: 280,
        height: 280,
        overflow: 'hidden'
    },


    Main: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        marginTop: 0,
        marginBottom: 40,
    },

    Title: {
        color: '#707070',
        fontSize: 15,
        marginTop: 10,
        backgroundColor: 'transparent'
    },

    Des: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    DesText: {
        fontSize: 12,
        color: '#959595',
        backgroundColor: 'transparent',
        textAlign: 'center',
        lineHeight: 20
    },

    textColor: {
        color: 'white',
        fontSize: 14,
    },

    ButtonFooter: {
        backgroundColor: '#FF7F88',
        height: 70
    }


});

export const Home = StyleSheet.create({

    getOff: {
        width: width - 30,
        height: 90,
        backgroundColor: '#A7A7A7',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    textOff: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    buttonContainer: {
        paddingTop: 10,
        marginBottom: 10,
        width: width - 30,
        alignSelf: 'center',
        backgroundColor: '#fff',
    },

    buttonSearch: {
        height: 30,
        alignSelf: 'center',
        backgroundColor: '#ff7f88',
        marginTop: 20,
        marginBottom: 20
    },

    ButtonMore: {
        alignSelf: 'center',
        color: '#707070',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    Iconstar: {
        color: '#ff7f88',
        marginRight: 3,
        fontSize: 18
    },

    ListItems: {
        marginBottom: 3,
        marginLeft: 0,
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,

    }
});

export const Profile = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#fff'
    },

    infomation: {
        alignSelf: 'center', width: '100%'
    },

    listItems: {
        borderBottomWidth: 0, marginLeft: 0
    },

    avarta: {
        flexDirection: 'column',
        flex: .7,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },

    thumbnail: {
        width: 99, height: 99, marginBottom: 5
    },

    textStyles: {
        fontSize: 15, fontWeight: 'bold', color: '#959595'
    },

    iconSocial: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 0,
        marginLeft: 10
    },

    labelAboutBox: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        alignSelf: 'flex-start'
    },

    labelAbout: {
        fontSize: 18, color: '#274d7a', fontWeight: 'bold', marginBottom: 3
    },

    contentAbout: {
        fontSize: 15, alignSelf: 'flex-start', lineHeight: 18
    },

    buttonContainer: {
        marginBottom: 20,
        marginLeft: 0,
        paddingLeft: 0,
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 1.0,
    },

    ButtonSkills: {
        borderWidth: 1,
        borderColor: '#FF7F88',
        backgroundColor: '#FDE2E4',
        borderRadius: 100,
        marginRight: 7
    },

    boxReview: {
        marginTop: 38, width: '100%'
    },

    boxLabel: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        alignSelf: 'flex-start'
    },

    labelReview: {
        fontSize: 18,
        color: '#274d7a',
        fontWeight: 'bold',
        marginBottom: 3
    },

    buttonSeemore: {
        fontSize: 12,
        color: '#FF7F88',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }

});

export const Confirmation = StyleSheet.create({
    buttonContainer: {
        marginBottom: 20,
        marginLeft: 0,
        paddingLeft: 0,
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 1.0,
    },

    BackgroundWhite: {
        backgroundColor: '#ffffff',
    },

    BackgroundPink: {
        backgroundColor: '#ff7f88',
    },

    CommonBox: {
        width: width - 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    styleText: {
        marginBottom: 5,
        color: '#707070',
        fontSize: 14,
        fontWeight: 'bold',
        height: 32,
        color: '#707070'
    },

    styleIcon: {
        color: '#ff7f88',
        marginRight: 3,
        fontSize: 18
    },

    stylesInput: {
        width: 216,
        height: 32,
        fontSize: 12,
        color: '#707070',
        fontWeight: 'bold',
        borderWidth: 1,
        marginTop: 5,
        borderColor: '#ff7f88',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',

    },

    dialogContentView: {
        flex: 1,
    },

});

export const Search = StyleSheet.create({

    Content01: {
        backgroundColor: '#F5F3F3'
    },

    ViewBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#9D9999',
        marginLeft: 20,
        paddingRight: 20,
    },

    Label: {
        fontSize: 14,
        color: '#171616',
        fontWeight: 'bold',

    },
    picker: {
        borderWidth: 0,
        opacity: 0,
        width: width
    },

    ChangeText: {
        flex: 1,
        position: 'absolute',
        right: 40,
        color: '#707070',
        fontWeight: 'bold',
        zIndex: -1,

    },

    iconPicture: {
        width: 9,
        height: 15,
        position: 'absolute',
        right: 20,
        zIndex: 10,

    }


});

export const Schedule = StyleSheet.create({
    ButtonUpcomming: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        backgroundColor: '#FADFE1',
        borderBottomColor: '#FF7F88',
    },

    ButtonPast: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        backgroundColor: '#D2E4F8',
        borderBottomColor: '#274D7A',
    }

});

export const Me = StyleSheet.create({
    Box: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 55
    },

    myAccouse: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#707070',
        marginBottom: 20, paddingBottom: 20
    },

    myName: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#274D7A',
        marginBottom: 5,
        alignSelf: 'center'
    },

    editProfileText: {
        fontSize: 13,
        color: '#707070',
        textDecorationLine: 'underline'
    },

    editProfileIcon: {
        fontSize: 14,
        color: '#707070',
        marginTop: 3,
        marginLeft: -10
    },

    AccountSettingIcon: {
        marginTop: 3,
        marginRight: 15,
        width: 30,
        height: 30
    },

    AccountSettingText: {
        fontSize: 13,
        color: '#707070',
        marginLeft: -20
    }

});

export const SignUp = StyleSheet.create({
    LinearGradientBG: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: .6,
    },

    Content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Avarta: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    TextWelcome: {
        color: '#274D7A',
        fontSize: 18,
        marginTop: 5,
        backgroundColor: 'transparent'
    },

    Form: {
        borderWidth: 1,
        width: 160,
        height: 30,
        fontSize: 11,
        fontWeight: 'bold',
        color: '#959595',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F8FBFF',
        borderColor: '#274D7A',
        opacity: .7,
        marginBottom: 10
    },

    checkBox: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },

    checkText: {
        fontSize: 11,
        color: '#707070',
        fontWeight: 'bold',
        marginLeft: 15,
        backgroundColor: 'transparent'
    },

    buttonSign: {
        width: 160,
        justifyContent: 'center',
        backgroundColor: '#FF7F88'
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    },

    signOther: {
        fontSize: 11,
        color: '#707070',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10
    },

    iconSocial: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    }


});

export const Chat = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },

    viewBox: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: .15
    },

    Thumbnail: {
        width: 50,
        height: 50,
        marginBottom: 5
    },

    textName: {
        fontSize: 10,
        textDecorationLine: 'underline',
        color: '#707070',
        fontWeight: 'bold'
    },

    contentMail: {
        paddingTop: 12,
        paddingLeft: 10,
        flex: .7,
        marginTop: 0,
        marginLeft: 12,
    },

    bgArrow: {
        position: 'absolute',
        top: 0,
        left: 0
    },

    bgContent: {
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 20
    },

    linkConfirm: {
        fontSize: 11,
        color: '#707070',
        fontWeight: 'bold',
        lineHeight: 20
    },

    buttonLink: {
        textDecorationLine: 'underline',
        fontSize: 11,
        color: '#707070',
        fontWeight: 'bold',
        lineHeight: 20
    },

    timeSenBox: {
        flex: .18,
        justifyContent: 'flex-end'
    },

    timeText: {
        fontSize: 8,
        color: '#707070',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    }
});

export const PayDeposit = StyleSheet.create({
    Container: {
        width: 250,
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },

    ChosePayment: {
        alignSelf: 'center',
        fontSize: 14, color: '#707070',
        fontWeight: 'bold'
    },

    ButtonCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    card: {
        width: 112,
        height: 73
    },

    box: {
        marginTop: 20
    },

    cardNumber: {
        color: '#707070',
        fontSize: 14,
        fontWeight: 'bold'
    },

    cardHolder: {
        color: '#707070',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20
    },

    TextInputStyle: {
        height: 30,
        borderColor: 'gray',
        borderBottomWidth: 1,
        fontWeight: 'bold',
    },

    box02: {
        marginTop: 20,
        flexDirection: 'row'
    },

    ExpireDate: {
        color: '#707070',
        fontSize: 14,
        fontWeight: 'bold'
    },

    textInputExpireDate: {
        height: 30,
        borderColor: 'gray',
        borderBottomWidth: 1,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold'
    },

    CCV: {
        height: 30,
        width: 45,
        borderColor: 'gray',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },

    buttonPayDeposit: {
        backgroundColor: '#4A90E2',
        alignSelf: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 20
    }

});

export const Result = StyleSheet.create({
    buttonContainer: {
        marginBottom: 0,
        marginLeft: 0,
        paddingLeft: 0,
        alignSelf: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 1.0,
    }
});

export const Message = StyleSheet.create({
    Badge: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#ff7f88',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    numberBadge: {
        fontSize: 9, 
        color: 'white', 
        marginLeft: -1
    },

    Title: {
        color: '#797979', fontSize: 12, fontWeight: 'bold'
    },

    fontSize: { fontSize: 9 },

    timeDate: {
        fontSize: 10, fontWeight: 'bold', marginTop: 15 
    }


});