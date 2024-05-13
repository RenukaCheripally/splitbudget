import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/InputComponents/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

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
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          ({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon="email"
                keyboardType='email-address'
                onChangeText={handleChange("email")}
                placeholder="Email Address"
                textContentType="emailAddress"
              />
              <AppText style={{color: colors.danger}} title={errors.email} />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <AppText style={{color: colors.danger}} title={errors.password} />
              <AppButton
                title="Login"
                onPress={handleSubmit}
              />
            </>
          )
        }
      </Formik>
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