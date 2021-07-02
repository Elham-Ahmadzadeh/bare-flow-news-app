import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  listNews: {
    paddingTop: 20,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontFamily: 'openSansBold',
    margin: 10,
  },
  imageNews: {
    height: 210,
    width: '98%',
    margin: 3,
  },
  newsDescription: {
    fontFamily: 'openSans',
    margin: 10,
    padding: 10,
    paddingBottom: 5,
    marginTop: 14,
    fontSize: 15,
  },
  button: {
    paddingTop: 2
  }
})