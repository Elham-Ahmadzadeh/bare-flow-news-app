import React, { useState, useContext } from 'react'
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
  StyledCalendarIcon,
  TextLinkContent,
  Colors,
  ErrorText
} from './Styles'
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  TouchableOpacity
} from 'react-native'
import { Octicons, Ionicons } from '@expo/vector-icons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import ThemeContext from '../../context/ThemeContext'
//import WelcomeScreen from './WelcomeScreen'
// Formik
import { Formik } from 'formik'
import * as yup from 'yup'
//YUP
const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character'
    )
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required')
})

const { brand, darkLight } = Colors
export default function SignupScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true)
  const MainTheme = useContext(ThemeContext)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const [birthDate, setBirthDate] = useState()

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date)
    setBirthDate(date)
    hideDatePicker()
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StyledContainer style={{ backgroundColor: MainTheme.backgroundColor }}>
        <StatusBar style="auto" />
        <ScrollView>
          <InnerContainer>
            <PageTitle>News App</PageTitle>
            <SubTitle style={{ color: MainTheme.color }}>Sign Up</SubTitle>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

            <Formik
              validationSchema={signUpValidationSchema}
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
                    label="Full name"
                    icon="person"
                    placeholder="Richard Bernson"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                  {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
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
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  <ScreenTextInput
                    label="Date of Birth"
                    placeholder="YYYY-MM-DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={handleBlur('dateOfBirth')}
                    isDate={true}
                    value={birthDate ? birthDate.toDateString() : ''}
                    editable={false}
                    showDatePicker={showDatePicker}
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
                    editable={true}
                  />
                  {errors.password && <ErrorText>{errors.password}</ErrorText>}
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
                    editable={true}
                  />
                  {errors.confirmPassword && (
                    <ErrorText>{errors.confirmPassword}</ErrorText>
                  )}
                  <StyledButton onPress={handleSubmit} disabled={!isValid}>
                    <StyledButtonText>Sign up</StyledButtonText>
                  </StyledButton>
                  <StyledLine />
                  <ExtraView>
                    <ExtraText style={{ color: MainTheme.color }}>
                      Already have an account?
                    </ExtraText>
                    <TextLinkContent onPress={() => navigation.push('Login')}>
                      Log in
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
  isDate,
  showDatePicker,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <StyledLeftIcon>
        <Octicons name={icon} size={25} color={brand} />
      </StyledLeftIcon>

      <StyledTextLabel>{label}</StyledTextLabel>
      {!isDate && <StyledTextInput {...props} />}

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledCalendarIcon>
            <Octicons name="calendar" size={25} color={brand} />
          </StyledCalendarIcon>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}

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
