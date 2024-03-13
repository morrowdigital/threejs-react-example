import { Canvas } from '@react-three/fiber';

import { Box } from './Box';

export function Scene() {
  return (
    <Canvas style={{ backgroundColor: 'pink' }}>
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
