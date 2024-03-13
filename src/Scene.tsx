import { Box } from './Box';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

type Props = {
  cameraZoom?: number;
  cameraY?: number;
};

export function Scene({ cameraZoom = 1, cameraY = 0 }: Props) {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.zoom = cameraZoom;
    camera.updateProjectionMatrix();
  }, [camera, cameraZoom]);

  useEffect(() => {
    camera.position.x = cameraY;
    camera.updateProjectionMatrix();
  }, [camera, cameraY]);

  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 1]} intensity={3} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
}
