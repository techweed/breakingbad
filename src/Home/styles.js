import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  body: {
    paddingTop: 60,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerText: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  smallText: {color: 'white', fontSize: 20, fontWeight: '700'},
  thinText: {color: 'white', fontSize: 20, fontWeight: '300'},
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
    borderRadius: 10,
  },
  listItem: {
    flex: 0.5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'hidden',
    marginHorizontal: 20,
    marginTop: 70,
  },
  itemBody: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  itemDesc: {flex: 0.8},
  iconSt: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  searchText: {
    fontSize: 50,
    fontWeight: '300',
    color: 'grey',
    flex: 0.8,
  },
  searchClose: {alignItems: 'center', justifyContent: 'center', flex: 0.2},
});
