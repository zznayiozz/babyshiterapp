import * as types from './../Contants/ActionTypes';
import React from 'react';
import { Container, Content, Icon, Header, List, ListItem, Left, Body, Right, Thumbnail, Badge, Button } from 'native-base';
import { Schedule as styles } from './../../Components/Styles/StyleHome';

const ListData = [
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 3,
        status: false
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 1,
        status: true
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 2,
        status: false
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 5,
        status: false
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 3,
        status: false
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 1,
        status: true
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 2,
        status: false
    },
    {
        Avarta: require('./../../images/AvartaProfile.png'),
        title: 'Sando',
        date: '14/02/2019 ~ 14/02/2019',
        time: '17:00 ~ 20:00',
        price: 180000,
        timeWork: 5,
        status: false
    },


];

const defaultState = {
    isData: ListData,
    isButtonActive: true,
    AnimateActive: { transform: ([{ scale: 1.1 }]), zIndex: 10 },
    
};

const contentSchedule = (state = defaultState, action) => {
    switch (action.type) {
        case types.Schedule:
            if (action.param == 'Button01' && state.isButtonActive == true) return state;
            if (action.param == 'Button02' && state.isButtonActive == false) return state;

            state.isButtonActive = !state.isButtonActive;

            return { ...state };

        default:
            return state;
    }

}

export default contentSchedule;