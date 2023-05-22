import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="아이디" />
      <TextInput style={styles.input} placeholder="비밀번호" secureTextEntry />
      <TextInput style={styles.input} placeholder="이름" />
      <Button title="회원가입" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SignupScreen;
