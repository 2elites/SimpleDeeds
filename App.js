import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import OnBoardingRoom00 from './src/screens/onBoardingRoom/Room00';
// import OnBoardingRoom01 from './src/screens/onBoardingRoom/Room01';
// import OnBoardingRoom02 from './src/screens/onBoardingRoom/Room02';
import Splash from './src/screens/Splash';
import SignUp from './src/screens/auth/SignUp';
import AccessClosingRoom from './src/screens/auth/AccessClosingRoom';
import ConfirmInformation from './src/screens/ConfirmInformation';
import ContactList from './src/screens/contact/ContactList';
import AddContact from './src/screens/contact/AddContact';
import CreateTransaction from './src/screens/contact/CreateTransaction';
import SetOptionPeriodDate from './src/screens/SetOptionPeriodDate';
import SetClosingDate from './src/screens/SetClosingDate';
import TransactionRoom from './src/screens/TransactionRoom';
import SessionChats from './src/screens/SessionChats';
import Settings from './src/screens/settings/Settings';
import Tasks from './src/screens/task/Tasks';
import TaskList from './src/screens/task/TaskList';
import CreateTask from './src/screens/task/CreateTask';
import SetDate from './src/screens/task/SetDate';
import ChatBox from './src/screens/chat/ChatBox';
import UploadFiles from './src/screens/chat/UploadFiles';
import Files from './src/screens/File/Files';
import ScanDocument from './src/screens/ScanDocument';
import ChatRoom from './src/screens/ChatRoom';
import ActivityLog from './src/screens/ActivityLog';

// somewhere in your app
import {MenuProvider} from 'react-native-popup-menu';
import SignIn from './src/screens/auth/SignIn';
import ConfirmId from './src/screens/ConfirmId';
import Security from './src/screens/settings/Security';
import Help from './src/screens/settings/Help';
import FAQ from './src/screens/settings/helps/FAQ';
import ContactUs from './src/screens/settings/helps/ContactUs';
import TermsConditions from './src/screens/settings/helps/TermsConditions';
import PrivayPolicy from './src/screens/settings/helps/PrivacyPolicy';
import AboutUs from './src/screens/settings/helps/AboutUs';
import EditProfile from './src/screens/contact/EditProfile';
import ContactInfo from './src/screens/contact/ContactInfo';

const App = () => {
  const Stack = createStackNavigator();

  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const verticalAnimation = {
    gestureDirection: 'vertical',
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const Screens = [
    // {
    //   name: 'OnBoardingRoom00',
    //   component: OnBoardingRoom00,
    //   options: horizontalAnimation,
    // },
    // {
    //   name: 'OnBoardingRoom01',
    //   component: OnBoardingRoom01,
    //   options: horizontalAnimation,
    // },
    // {
    //   name: 'OnBoardingRoom02',
    //   component: OnBoardingRoom02,
    //   options: horizontalAnimation,
    // },
    {
      name: 'Splash',
      component: Splash,
      options: verticalAnimation,
    },
    {
      name: 'ContactInfo',
      component: ContactInfo,
      options: horizontalAnimation,
    },
    {
      name: 'EditProfile',
      component: EditProfile,
      options: horizontalAnimation,
    },
    {
      name: 'PrivayPolicy',
      component: PrivayPolicy,
      options: horizontalAnimation,
    },
    {
      name: 'AboutUs',
      component: AboutUs,
      options: horizontalAnimation,
    },
    {
      name: 'TermsConditions',
      component: TermsConditions,
      options: horizontalAnimation,
    },
    {
      name: 'ContactUs',
      component: ContactUs,
      options: horizontalAnimation,
    },
    {
      name: 'FAQ',
      component: FAQ,
      options: horizontalAnimation,
    },
    {
      name: 'Help',
      component: Help,
      options: horizontalAnimation,
    },
    {
      name: 'Security',
      component: Security,
      options: horizontalAnimation,
    },
    {
      name: 'Settings',
      component: Settings,
      options: verticalAnimation,
    },
    {
      name: 'SignIn',
      component: SignIn,
      options: verticalAnimation,
    },
    {
      name: 'SignUp',
      component: SignUp,
      options: verticalAnimation,
    },
    {
      name: 'ConfirmId',
      component: ConfirmId,
      options: verticalAnimation,
    },
    {
      name: 'ConfirmInformation',
      component: ConfirmInformation,
      options: verticalAnimation,
    },
    {
      name: 'ContactList',
      component: ContactList,
      options: horizontalAnimation,
    },
    {
      name: 'CreateTransaction',
      component: CreateTransaction,
      options: horizontalAnimation,
    },
    {
      name: 'SetClosingDate',
      component: SetClosingDate,
      options: verticalAnimation,
    },
    {
      name: 'SetOptionPeriodDate',
      component: SetOptionPeriodDate,
      options: verticalAnimation,
    },
    {
      name: 'Tasks',
      component: Tasks,
      options: horizontalAnimation,
    },
    // {
    //   name: 'Settings',
    //   component: Settings,
    //   options: verticalAnimation,
    // },
    {
      name: 'TaskList',
      component: TaskList,
      options: verticalAnimation,
    },
    {
      name: 'SessionChats',
      component: SessionChats,
      options: verticalAnimation,
    },
    {
      name: 'TransactionRoom',
      component: TransactionRoom,
      options: verticalAnimation,
    },
    {
      name: 'AddContact',
      component: AddContact,
      options: verticalAnimation,
    },
    {
      name: 'ChatBox',
      component: ChatBox,
      options: horizontalAnimation,
    },
    {
      name: 'SetDate',
      component: SetDate,
      options: verticalAnimation,
    },
    {
      name: 'CreateTask',
      component: CreateTask,
      options: verticalAnimation,
    },
    {
      name: 'UploadFiles',
      component: UploadFiles,
      options: verticalAnimation,
    },
    {
      name: 'Files',
      component: Files,
      options: horizontalAnimation,
    },
    {
      name: 'ScanDocument',
      component: ScanDocument,
      options: verticalAnimation,
    },
    {
      name: 'AccessClosingRoom',
      component: AccessClosingRoom,
      options: verticalAnimation,
    },
    {
      name: 'ChatRoom',
      component: ChatRoom,
      options: verticalAnimation,
    },
    {
      name: 'ActivityLog',
      component: ActivityLog,
      options: verticalAnimation,
    },
  ];

  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            presentation: 'modal',
          }}>
          {Screens.map((row, key) => {
            return (
              <Stack.Screen
                name={row.name}
                component={row.component}
                options={row.options}
                key={key}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
