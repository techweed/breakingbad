import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  name: {
    fontSize: 30,
    marginBottom: 0,
    textAlign: 'left',
    color: '#fff',
    fontWeight: '800',
    fontFamily: 'Avenir',
  },

  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 300,
  },
  address: {
    position: 'relative',
    top: 0,
    alignSelf: 'flex-start',
    color: '#00ace6',
    fontWeight: '800',
    fontFamily: 'Avenir',
  },
  container: {
    alignSelf: 'stretch',
    height: 300,
  },
  listitem: {
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 300,
    width,
    justifyContent: 'flex-end',
  },
});
