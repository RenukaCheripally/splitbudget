import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/Forms/AppFormField';
import SubmitButton from '../components/Forms/SubmitButton';
import AppForm from '../components/Forms/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.jpeg")}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon="email"
          keyboardType='email-address'
          name="email"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton
          title="Login"
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    padding: 10,
  },
})

export default LoginScreen;