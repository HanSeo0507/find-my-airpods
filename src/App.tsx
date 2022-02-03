import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-easy-icon';
import Home from './pages/Home';
import Settings from './pages/Settings';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'cog' : 'cog-outline'}
              type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
