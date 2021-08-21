import styled from 'styled-components'
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
export const Container = styled.SafeAreaView`
display: flex;
padding: 10px;
justify-content: space-around;
align-items: stretch;
`


export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 15px;
  align-self: center;
  border-radius: 5px;
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  background-color: ${brand};
  border-radius: 5px;
  margin-vertical: 10px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.pickImage === true &&
    `
  background-color: ${green};
  flex-direction: row;
  justify-content: center;
  `}
`



export const StyledButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  margin: 6px;

`
export const ChatText= styled.Text`
  font-size: 30px;
  text-align: center;
  font-family: openSans;
  font-weight: bold;
  padding: 8px;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondry};
  padding: 15px 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-right: 5px;
  margin-top: 5px;
  color: ${tertiary};
`