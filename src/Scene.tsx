import { Box } from './Box';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

type Props = {
  cameraZoom?: number;
};

export function Scene({ cameraZoom = 1 }: Props) {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.zoom = cameraZoom;
    camera.updateProjectionMatrix();
  }, [camera, cameraZoom]);

  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 1]} intensity={3} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
}
