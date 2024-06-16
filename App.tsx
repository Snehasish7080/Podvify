/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import ParentNavigation from './src/Navigations/Parent/Parent';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/utils/theme/Colors';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.secondary.main,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ParentNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
