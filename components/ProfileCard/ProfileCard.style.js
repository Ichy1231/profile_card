import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },

  texts: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: 'red',
  },

  header: {
    flexDirection: 'row',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
