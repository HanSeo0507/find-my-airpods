import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Root;
