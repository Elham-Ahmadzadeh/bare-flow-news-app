import React, { useState } from 'react'

import ImageChooser from './ImageChooser'
import {
  ChatText,
  Container,

  StyledTextInput,
  Photo,
  StyledButton,
  StyledButtonText
} from './Styles'


export default function PersonalInfo() {
  const [name, setName] = useState('')
  const [fileImage, setFileImage] = useState({})

function onClosed( ) {
  console.log(fileImage)
}
  return (
    <Container>
       <ImageChooser onChangeImage={(fileImage) => fileImage} />

      <StyledTextInput
        label="Enter your name"
        placeholder="Eli Ahm"
        onChangeText={(name) => setName(name)}
        value={name}
      />

 <StyledButton onPress={() => props.onClosed(name)}>
        <StyledButtonText>start chatting</StyledButtonText>
      </StyledButton>
    </Container>
  )
}
