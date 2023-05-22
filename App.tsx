// app.tsx
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleSignupClick = () => {
    setCurrentScreen('signup');
  };

  const handleGoBack = () => {
    setCurrentScreen('login');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'login' ? (
        <LoginScreen handleSignupClick={handleSignupClick} />
      ) : (
        <SignupScreen handleGoBack={handleGoBack} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
