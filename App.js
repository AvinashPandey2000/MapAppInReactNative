// import React, {  useState } from "react";
// import { View, StyleSheet, Text,  Image } from "react-native";
// import MapboxGL from "@react-native-mapbox-gl/maps";
// MapboxGL.setAccessToken("pk.eyJ1IjoiMjBwYW5kZXkiLCJhIjoiY2xoMGd6ZDhwMHRpNjNucWNhbW55czgyYSJ9.Im7CEFTmlNRSS-jmu_TgbA");

// const App =()=> {
//   const [coordinates] = useState([78.9629, 20.5937]);

//    return (
//     <View style={styles.page}>
//        <View style={styles.container}>
//          <MapboxGL.MapView style={styles.map}>
//            <MapboxGL.Camera
//              zoomLevel={4}
//              centerCoordinate={coordinates}
//            />
//            <MapboxGL.PointAnnotation coordinate={coordinates} />
//          </MapboxGL.MapView>
//        </View>
//      </View>
//    );
// }

// const styles = StyleSheet.create({
//  page: {
//    flex: 1,
//    justifyContent: "center",
//    alignItems: "center",
//    backgroundColor: "#F5FCFF"
//  },
//  container: {
//  height: '100%',
//    width: '100%',
//    backgroundColor: 'blue',
//  },
//  map: {
//    flex: 1
//  }
// });










import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE,Marker,Circle} from 'react-native-maps';
import CustomeMarker from './src/components/CustomeMarker';
export default function componentName() {
  const [mapRegion , setmapRegion]=useState({
    latitude: 22.58423471801689,
    longitude: 75.71132691861877,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })
  const src='data:image/png;base64,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'
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={mapRegion}>
        <Circle center={mapRegion} radius={500}/>
       
        <Marker coordinate={mapRegion} title='Marker'>
        <CustomeMarker src={src}/>
      </Marker>
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
