import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyledContainer, InnerContainer, PageLogo, PageTitle } from './Styles'
// Formik
import { Formik } from 'formic'
export default function LoginScreen() {
  return (
    <StyledContainer>
      <StatusBar style="auto" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require('../../assets/img/flower.png')}
        />
        <PageTitle>Login</PageTitle>
        <SubTitle>News Login</SubTitle>
      </InnerContainer>
    </StyledContainer>
  )
}
