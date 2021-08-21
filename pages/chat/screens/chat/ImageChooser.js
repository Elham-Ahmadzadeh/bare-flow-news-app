import React, { useState } from 'react'

import {
  ChatText,
  CenterLine,
  Container,
  Photo,
  StyledButton,
  StyledButtonText
} from './Styles'
import { launchImageLibrary } from 'react-native-image-picker'
import { SafeAreaView } from 'react-native'

export default function ImageChooser(props) {
  const [fileImage, setFileImage] = useState({})

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        alert('User cancelled camera picker')
        return
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device')
        return
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied')
        return
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage)
        return
      }
      setFileImage(response.assets[0])
      props.onChangeImage(fileImage)
    })
  }

  return (
  <SafeAreaView>
      <StyledButton  pickImage={true}  activeOpacity={0.5} onPress={() => chooseFile('photo')}>
        <StyledButtonText>Choose Image</StyledButtonText>
      </StyledButton>

      {fileImage && <Photo source={{ uri: fileImage.uri }} />}
  </SafeAreaView>
  )
}
