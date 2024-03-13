import { StatusBar } from 'expo-status-bar';

import { Scene } from './src/Scene';
import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
      <StatusBar style='auto' />
    </>
  );
}
