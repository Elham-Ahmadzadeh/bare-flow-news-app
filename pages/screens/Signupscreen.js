import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyledContainer,
  InnerContainer,
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
  TextLink,
  TextLinkCotent,
  Colors
} from './Styles'
import { ScrollView, KeyboardAvoidingView, View } from 'react-native'
import { Octicons, Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
// Formik
import { Formik } from 'formik'
const { brand, darkLight, primary } = Colors
export default function SignupScreen({ navigation, route }) {
  const [hidePassword, setHidePassword] = useState(true)
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date(2000, 0, 1))

  const [birthDate, setBirthDate] = useState()
  const onChange = (event, selectedDate) => {}

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StyledContainer>
        <StatusBar style="auto" />
        <ScrollView>
          <InnerContainer>
            <PageTitle>News App</PageTitle>
            <SubTitle>Sign up</SubTitle>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

            <Formik
              initialValues={{
                fullName: '',
                dateOfBirth: '',
                confirmPassword: '',
                email: '',
                password: ''
              }}
              onSubmit={(values) => {
                console.log(values)
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <ScreenTextInput
                    label="Full name"
                    icon="person"
                    placeholder="Richard Bernson"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                  <ScreenTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="hello@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  <ScreenTextInput
                    label="Date of Birth"
                    icon="calendar"
                    placeholder="yyyy - mmmm - dd"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={handleBlur('dateOfBirth')}
                    value={values.dateOfBirth}
                  />

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

                  <ScreenTextInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />

                  <StyledButton onPress={handleSubmit}>
                    <StyledButtonText>Sign up</StyledButtonText>
                  </StyledButton>
                  <StyledLine />
                  <ExtraView>
                    <ExtraText>Already have an account?</ExtraText>
                    <TextLinkCotent onPress={() => navigation.push('Login')}>
                      Log in
                    </TextLinkCotent>
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
