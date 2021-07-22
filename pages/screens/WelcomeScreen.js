/* import React, { useState, useContext } from 'react'
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
  TextLink,
  TextLinkCotent,
  Colors
} from './Styles'
import { ScrollView, KeyboardAvoidingView, View } from 'react-native'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import ThemeContext from '../../context/ThemeContext'

// Formik
import { Formik } from 'formik'

const { brand, darkLight, primary } = Colors
export default function WelcomeScreen({ navigation }) {
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
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => {
                console.log(values)
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
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

                  <StyledButton onPress={handleSubmit}>
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
                    <TextLinkCotent onPress={() => navigation.push('Signup')}>
                      Sign up
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
 */
