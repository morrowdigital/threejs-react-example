import { Canvas } from '@react-three/fiber';
import { StatusBar } from 'expo-status-bar';

import { Scene } from './src/Scene';

export default function App() {
  return (
    <>
      <Scene />
      <StatusBar style='auto' />
    </>
  );
}
