/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import a from './a.json';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);
  const [searchRes, setSearchRes] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(res => res.json())
      .then(json => {
        let temp = json.map(item => ({...item, fav: false}));
        setDataSource([...temp]);
        setSearchRes([...temp]);
      });
  }, []);

  const search = text => {
    setSearchKey(text);
    setSearchRes(
      dataSource.filter(item =>
        item?.name?.toLowerCase().includes(text?.toLowerCase()),
      ),
    );
  };
  const toggleLike = (item, index) => {
    let temp = searchRes.map(it => {
      if (it.name === item.name) {
        return {...it, fav: !it.fav};
      } else {
        return it;
      }
    });
    setSearchRes([...temp]);
    temp = dataSource.map(it => {
      if (it.name === item.name) {
        return {...it, fav: !it.fav};
      } else {
        return it;
      }
    });
    setDataSource([...temp]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.body}>
        {searchActive ? (
          <View style={styles.searchBox}>
            <TextInput
              autoFocus
              onChangeText={text => search(text)}
              value={searchKey}
              placeholder="Search"
              placeholderTextColor="grey"
              style={styles.searchText}
            />
            <TouchableOpacity
              onPress={() => {
                setSearchActive(false);
                setSearchKey('');
                setSearchRes(dataSource);
              }}
              style={styles.searchClose}>
              <Icon name="close-outline" size={40} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              {showFav ? (
                <TouchableOpacity
                  style={{paddingRight: 10, justifyContent: 'center'}}
                  onPress={() => {
                    setShowFav(false);
                  }}>
                  <Icon name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
              ) : null}
              <Text style={styles.headerText}>
                {showFav ? 'Favorites' : 'The Breaking Bad'}
              </Text>
            </View>
            <View style={styles.iconGroup}>
              {!showFav ? (
                <TouchableOpacity
                  style={{paddingRight: 20}}
                  onPress={() => {
                    setShowFav(true);
                  }}>
                  <Icon name="heart" size={30} color="green" />
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity onPress={() => setSearchActive(true)}>
                <Icon name="search-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {searchRes.length === 0 ||
        (showFav &&
          searchRes?.filter(item => item.fav === true).length === 0) ? (
          <View style={{paddingTop: 50, paddingHorizontal: 20}}>
            <Text
              style={{
                color: 'green',
                fontSize: 30,
                fontWeight: '300',
              }}>
              No character found
            </Text>
            <Text style={{color: 'white', fontSize: 30, fontWeight: '300'}}>
              Try again
            </Text>
          </View>
        ) : (
          <FlatList
            data={
              showFav ? searchRes?.filter(item => item.fav === true) : searchRes
            }
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => navigation.navigate('Detail', {...item})}>
                <Image
                  style={styles.imageThumbnail}
                  source={{uri: item.img}}
                  resizeMode="cover"
                />
                <View style={styles.itemBody}>
                  <View style={styles.itemDesc}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.smallText}>
                      {item.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.thinText}>
                      {item.nickname}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.iconSt}
                    onPress={() => toggleLike(item, index)}>
                    <Icon
                      name={item.fav ? 'heart' : 'heart-outline'}
                      size={30}
                      color="green"
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
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
