import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

import { Box } from './Box';

export function Scene() {
  return (
    <Canvas>
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
