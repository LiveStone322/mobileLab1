import React from 'react'
import {View, StyleSheet, StatusBar, LogBox} from 'react-native'
import {Icon} from 'react-native-elements'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import uuid from 'react-native-uuid'
import {Buffer} from 'buffer'
import mapStyle from '../constants/mapStyle'

global.Buffer = Buffer
LogBox.ignoreAllLogs()

const MyComponent = () => {
  Geolocation.getCurrentPosition((g) => {
    setGeo({
      latitude: g.coords.latitude,
      longitude: g.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    })
  })

  const AddMarker = (coords) => {
    console.log(coords, markering)
    if (!markering || !coords) return
    setMarkers((prev) => [
      ...prev,
      {id: uuid.v4(), latitude: coords.latitude, longitude: coords.longitude},
    ])
  }
  const [markers, setMarkers] = React.useState([
    {
      id: uuid.v4(),
      latitude: 57.9947029612,
      longitude: 56.2291891694,
    },
  ])
  const [geo, setGeo] = React.useState()
  const [markering, setMarkering] = React.useState(false)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#E9E7FC'} barStyle={'dark-content'} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 47.9947029612,
          longitude: 42.2291891694,
          latitudeDelta: 40,
          longitudeDelta: 40,
        }}
        customMapStyle={mapStyle}>
        {markers.map((coords) => {
          return (
            <Marker
              key={coords.id}
              coordinate={{
                latitude: coords.latitude,
                longitude: coords.longitude,
              }}>
              <Icon
                name="map-marker"
                type="font-awesome"
                color="#692EFC"
                size={64}
                underlayColor="white"
                iconStyle={styles.pinIcon}
                onPress={() => setMarkering(!markering)}
              />
            </Marker>
          )
        })}
      </MapView>
      <View style={styles.pin}>
        <Icon
          reverse
          name="map-marker"
          type="font-awesome"
          color="#692EFC"
          size={32}
          underlayColor="white"
          iconStyle={styles.pinIcon}
          onPress={() => setMarkering(!markering)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E9E7FC',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  pin: {
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
  pinIcon: {
    elevation: 1,
  },
})

export default MyComponent
