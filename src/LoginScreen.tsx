// LoginScreen.tsx
import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const LoginScreen = ({handleSignupClick}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="아이디" />
      <TextInput style={styles.input} placeholder="비밀번호" secureTextEntry />
      <Button title="로그인" onPress={() => {}} />
      <Button title="회원가입" onPress={handleSignupClick} />
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
    width: 200, // 전체 너비로 설정
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
