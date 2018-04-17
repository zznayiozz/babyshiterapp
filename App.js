import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Info from './src/Components/Info';
import Home from './src/Components/Home';
import Message from './src/Components/Message';
import Schedule from './src/Components/Schedule';
import Me from './src/Components/Me';
import Search from './src/Components/Search';
import Result from './src/Components/Result';
import Profile from './src/Components/Profile';
import Confirmation from './src/Components/Confirmation';
import PayDeposit from './src/Components/PayDeposit';
import SignUp from './src/Components/SignUp';
import Chat from './src/Components/Chat';
import Congratulations from './src/Components/Congratulations';

let TabNavigatorConfigs = TabNavigator(
	{
		screenHome: { screen: Home },
		screenMessage: { screen: Message },
		screenSchedule: { screen: Schedule },
		screenMe: { screen: Me },
		
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: true,
		swipeEnabled: true,
		tabBarOptions: {
			activeTintColor: '#ff7f88',
			inactiveTintColor: '#959595',
			showLabel: false,
			showIcon: true,
			style: {
				backgroundColor: '#f5f3f3',
				height: 55,
			},
			iconStyle : {
				width: 50, height: 50 ,
				justifyContent: 'center',
				marginTop: -10
			},
			indicatorStyle: {
				opacity: 0
			}
		},
	},
);

let routerConfigs = {
	screenInfo: { screen: Info },
	screenSearch: { screen: Search },
	screenResult: { screen: Result },
	screenSignUp: { screen: SignUp },
	screenProfile: { screen: Profile },
	screenCongratulations: { screen: Congratulations },
	screenConfirmation: { screen: Confirmation },
	screenConPayDeposit: { screen: PayDeposit },
	screenChat: { screen: Chat },
	screenHome: { screen: TabNavigatorConfigs },
	
};

let navigationOption = {
	navigationOptions : {
		header: null,
		headerTitleStyle: { color: '#274d7a', flex: 1, textAlign: 'center', alignSelf: 'center'},
		headerStyle: {backgroundColor: "#f5f3f3"},
		
	}
};

const Routers = StackNavigator(routerConfigs, navigationOption);
export default class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isFont: true,
        }
	}
	async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ isFont: false });
    };
	render() {
        if (this.state.isFont) { return <Expo.AppLoading /> }
        return (<Routers />);
    }
}





