import React from 'react';
import {Button, Dimensions, Platform, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
class App extends React.Component {
  state = {
    countMarkers: 0,
    activeMarkerIndex: null,
    markerColor: 'red',
  };

  changeMarkerColors = () => {
    const color = this.state.markerColor === 'red' ? 'purple' : 'red';
    this.setState({
      markerColor: color,
    });
  };

  mapMarkers = () => {
    if (this.state.countMarkers === 0) {
      console.log('no markers');
      return null;
    }
    if (this.state.countMarkers === 1) {
      console.log('1 marker');
      return (
        <Marker
          onPress={() => this.setState({activeMarkerIndex: 1})}
          tracksViewChanges={false}
          identifier={'1'}
          key={`${1}-${
            this.state.activeMarkerIndex === 1 ? '-active' : '-inactive'
          }-${this.state.markerColor}`}
          coordinate={{
            latitude: 37.33548,
            longitude: -121.893028,
          }}
          pinColor={
            this.state.activeMarkerIndex === 1
              ? 'green'
              : this.state.markerColor
          }
        />
      );
    } else {
      console.log('2 markers');
      return (
        <>
          <Marker
            tracksViewChanges={false}
            onPress={() => this.setState({activeMarkerIndex: 2})}
            identifier={'2'}
            key={`${2}-${
              this.state.activeMarkerIndex === 2 ? '-active' : '-inactive'
            }-${this.state.markerColor}`}
            coordinate={{
              latitude: 39.33548,
              longitude: -121.893028,
            }}
            pinColor={
              this.state.activeMarkerIndex === 2
                ? 'green'
                : this.state.markerColor
            }
          />
          <Marker
            tracksViewChanges={false}
            onPress={() => this.setState({activeMarkerIndex: 3})}
            identifier={'3'}
            key={`${3}-${
              this.state.activeMarkerIndex === 3 ? '-active' : '-inactive'
            }-${this.state.markerColor}`}
            coordinate={{
              latitude: 32.452961,
              longitude: -96.7969879,
            }}
            pinColor={
              this.state.activeMarkerIndex === 3
                ? 'green'
                : this.state.markerColor
            }
          />
        </>
      );
    }
  };

  render() {
    const markers = this.mapMarkers();
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <MapView
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          region={{
            latitude: 38,
            longitude: -100,
            latitudeDelta: 60,
            longitudeDelta: 60,
          }}>
          {markers}
        </MapView>
        <View style={{position: 'absolute', bottom: 50}}>
          <Button
            title={'0 markers'}
            onPress={() => this.setState({countMarkers: 0})}
          />
          <Button
            title={'1 markers'}
            onPress={() => this.setState({countMarkers: 1})}
          />
          <Button
            title={'2 markers'}
            onPress={() => this.setState({countMarkers: 2})}
          />
          <Button
            title={'Change inactive marker color'}
            onPress={() => this.changeMarkerColors()}
          />
        </View>
      </View>
    );
  }
}
export default App;
