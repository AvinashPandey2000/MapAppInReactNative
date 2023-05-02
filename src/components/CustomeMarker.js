import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';

export default function CustomeMarker({src}) {
  return (
    <View style={styles.conariner}>
    <Image source={{uri: src}}
    style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  conariner: {
    height: 40,
    width: 40,
    borderRadius: 50,
    // backgroundColor: '#FFFF',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
