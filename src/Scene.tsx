import { Box } from './Box';
import { useThree } from '@react-three/fiber';

export function Scene() {
  const camera = useThree((state) => state.camera);

  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 1]} intensity={3} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
}
