import React, { useState, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledLeftIcon,
  StyledRightIcon,
  StyledTextInput,
  StyledTextLabel,
  StyledButton,
  StyledButtonText,
  StyledLine,
  ExtraText,
  ExtraView,
  TextLinkContent,
  Colors,
  ErrorText
} from './Styles'
import { ScrollView, KeyboardAvoidingView, View } from 'react-native'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import ThemeContext from '../../context/ThemeContext'

// Formik
import { Formik } from 'formik'
import * as yup from 'yup'

//YUP
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
})

const { brand, darkLight, primary } = Colors
export default function LoginScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true)
  const MainTheme = useContext(ThemeContext)

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StyledContainer style={{ backgroundColor: MainTheme.backgroundColor }}>
        <StatusBar style="auto" />
        <ScrollView>
          <InnerContainer>
            <PageLogo
              resizeMode="cover"
              source={require('../../assets/img/flower.png')}
            />
            <PageTitle>News App</PageTitle>
            <SubTitle style={{ color: MainTheme.color }}>Login</SubTitle>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => {
                console.log(values)
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                isValid,
                values
              }) => (
                <StyledFormArea>
                  <ScreenTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="hello@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    style={{ color: MainTheme.color }}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  <ScreenTextInput
                    label="Password"
                    icon="lock"
                    placeholder="* * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  {errors.password && <ErrorText>{errors.password}</ErrorText>}
                  <StyledButton onPress={handleSubmit} disabled={!isValid}>
                    <StyledButtonText>Login</StyledButtonText>
                  </StyledButton>
                  <StyledLine />
                  <StyledButton google={true} onPress={handleSubmit}>
                    <Fontisto name="google" color={primary} size={25} />
                    <StyledButtonText google={true}>
                      Sign in with Google
                    </StyledButtonText>
                  </StyledButton>
                  <ExtraView>
                    <ExtraText style={{ color: MainTheme.color }}>
                      Dont have an account?
                    </ExtraText>
                    <TextLinkContent onPress={() => navigation.push('Signup')}>
                      Sign up
                    </TextLinkContent>
                  </ExtraView>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </ScrollView>
      </StyledContainer>
    </KeyboardAvoidingView>
  )
}
const ScreenTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <StyledLeftIcon>
        <Octicons name={icon} size={25} color={brand} />
      </StyledLeftIcon>
      <StyledTextLabel>{label}</StyledTextLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <StyledRightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={25}
            color={darkLight}
          />
        </StyledRightIcon>
      )}
    </View>
  )
}
