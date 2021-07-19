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
  TextLinkCotent,
  Colors
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
                    <ExtraText style={{ color: MainTheme.color }}>
                      Already have an account?
                    </ExtraText>
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
