import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';


const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'DevRadar'
            }
        },
        Profile:  {
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerPosition: 'center',
            headerTitleStyle: {
                alignSelf: (Platform.OS === 'android') ? 'flex-end' : 'center'
            },
            headerStyle: {
                backgroundColor: '#7D40E7'
            }
        }
    })
);

export default Routes;
