import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';

import styles from './styles';

const Detail = ({route}) => {
  const data = route.params;
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{uri: data.img}} style={styles.backgroundImage}>
        <View style={styles.listitem}>
          <Text style={styles.address}> {data.name} </Text>
          <Text style={styles.name}>{data.nickname}</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Detail;
