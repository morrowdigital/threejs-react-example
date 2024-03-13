import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Scene } from './src/Scene';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function App() {
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(0);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Canvas>
        <Scene cameraZoom={zoom} cameraY={x} />
      </Canvas>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          width: '90%',
          maxWidth: 200,
          alignSelf: 'center',
        }}
      >
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={-2}
          maximumValue={2}
          value={0}
          onValueChange={setX}
          thumbTintColor='green'
          minimumTrackTintColor='green'
          maximumTrackTintColor='green'
        />

        <Slider
          style={{ width: '100%', height: 40 }}
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
