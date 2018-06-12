import { createStackNavigator } from 'react-navigation';
import { about_application, quotations } from './screens';

const RootStack = createStackNavigator(
  {
    Application: about_application,
    Quotations: quotations,
  },
  {
    initialRouteName: 'Application',
  }
);

export default RootStack