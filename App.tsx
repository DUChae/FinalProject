import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleSignupClick = () => {
    setCurrentScreen('signup');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'login' ? <LoginScreen /> : <SignupScreen />}
      <Button title="회원가입" onPress={handleSignupClick} />
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
