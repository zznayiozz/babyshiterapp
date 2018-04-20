import * as types from './../Contants/ActionTypes';


const ListItems = [
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review !',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    },
    {
        name    : "Minh",
        thmbanil: require('./../../images/AvartaProfile.png'),
        review: '600 review',
        note: 'Distric 1, HCMC'
    }
];

const defaultState = {
    ListItems: ListItems,
    isNumber: true,
    isMore: 'See more'
};

const contentHome = (state = defaultState, action) => {
    switch(action.type){
        case types.ToggleList:
            state.isNumber  = !state.isNumber;
            state.isMore    =  (state.isNumber) ? "See more" : "View Sort";
			return {...state};
		
		default:
			return state;
	}
    
}

export default contentHome;