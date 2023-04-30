import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';

export default function componentName() {
  const [mapRegion , setmapRegion]=useState({
    latitude: 22.58423471801689,
    longitude: 75.71132691861877,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })


  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={mapRegion}>
        <Marker coordinate={mapRegion} title='Marker'/>
        
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
