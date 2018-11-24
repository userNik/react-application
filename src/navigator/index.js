import { createStackNavigator, createAppContainer } from 'react-navigation';
import SighIn from "../components/SignIn";
import Initializer from "../components/Initializer";
import Search from "../components/Search";
import OfflineNotice from "../components/OfflineNotice";


const AppNavigator = createStackNavigator({
    Initializer: { screen: Initializer },
    SighIn: { screen: SighIn },
    Search: { screen: Search },
    OfflineNotice: { screen: OfflineNotice },

}, {
    initialRouteName: 'Initializer',
});

export default createAppContainer(AppNavigator);