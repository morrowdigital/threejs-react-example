import Slider from '@react-native-community/slider';
import { Canvas } from '@react-three/fiber';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Scene } from './src/Scene';

export default function App() {
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(0);

  return (
    <View style={styles.wrapper}>
      <Canvas>
        <Scene cameraZoom={zoom} cameraX={x} />
      </Canvas>
      <View style={styles.slidersWrapper}>
        <Slider
          style={styles.slider}
          minimumValue={-2}
          maximumValue={2}
          value={0}
          onValueChange={setX}
          thumbTintColor='green'
          minimumTrackTintColor='green'
          maximumTrackTintColor='green'
        />

        <Slider
          style={styles.slider}
          minimumValue={0.5}
          maximumValue={2}
          value={1}
          onValueChange={setZoom}
          thumbTintColor='orange'
          minimumTrackTintColor='orange'
          maximumTrackTintColor='orange'
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { height: '100%', width: '100%' },
  slidersWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    maxWidth: 200,
    alignSelf: 'center',
  },
  slider: { width: '100%', height: 40 },
});
