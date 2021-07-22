import styled from 'styled-components'

// Colors
export const Colors = {
  primary: '#ffffff',
  secondry: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444'
}
const { primary, secondry, tertiary, darkLight, brand, green, red } = Colors

export const StyledContainer = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${primary};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const PageLogo = styled.Image`
  width: 290px;
  height: 180px;
  border-radius: 5px;
`

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-family: openSans;
  font-weight: bold;
  color: ${brand};
  padding: 8px;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 18px;
  font-weight: bold;
  color: ${tertiary};
  padding: 10px;
`
export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondry};
  padding: 15px 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  color: ${tertiary};
`

export const StyledTextLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`

export const StyledLeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`

export const StyledRightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`
export const StyledCalendarIcon = styled.View`
  left: 15px;
  top: 25px;
  position: absolute;
  z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  background-color: ${brand};
  border-radius: 5px;
  margin-vertical: 10px;
  height: 60px;

  ${(props) =>
    props.google === true &&
    `
  background-color: ${green};
  flex-direction: row;
  justify-content: center;
  `}
`

export const StyledButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  ${(props) =>
    props.google === true &&
    `
  background-color: ${green};
  margin: 6px;
  `}
`

export const StyledLine = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 16px;
`

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`

export const ErrorText = styled.Text`
  font-size: 14px;
  color: ${red};
`
