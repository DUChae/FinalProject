import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SignupScreen = ({handleGoBack}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [customExperience, setCustomExperience] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const handleSignup = () => {
    // 회원가입 로직을 구현합니다.
    console.log(
      '회원가입',
      `아이디: ${username}\n비밀번호: ${password}\n이름: ${name}\n경력: ${experience}`,
    );
  };

  const handleExperiencePress = () => {
    setIsPickerVisible(true);
  };

  const handleExperienceChange = value => {
    setExperience(value);
    setIsPickerVisible(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.pickerContainer}>
        <Button
          title={experience ? experience : '경력 선택'}
          onPress={handleExperiencePress}
        />
        {isPickerVisible && (
          <Picker
            selectedValue={experience}
            style={styles.picker}
            onValueChange={handleExperienceChange}>
            <Picker.Item label="6개월" value="6개월" />
            <Picker.Item label="1년" value="1년" />
            <Picker.Item label="2년" value="2년" />
            <Picker.Item label="3년" value="3년" />
            <Picker.Item label="4년" value="4년" />
            <Picker.Item label="5년" value="5년" />
            <Picker.Item label="기타" value="기타" />
          </Picker>
        )}
      </View>
      {experience === '기타' && (
        <TextInput
          style={styles.input}
          placeholder="기타 경력"
          value={customExperience}
          onChangeText={setCustomExperience}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button title="회원가입" onPress={handleSignup} />
        <Button title="뒤로가기" onPress={handleGoBack} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  pickerContainer: {
    width: 300,
    marginBottom: 12,
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 16,
  },
});

export default SignupScreen;
