import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

import { Box } from './Box';
import { Plane } from './Plane';
import { Sphere } from './Sphere';

type Props = {
  cameraZoom?: number;
  cameraX?: number;
};

export function Scene({ cameraZoom = 1, cameraX = 0 }: Props) {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.zoom = cameraZoom;
    camera.updateProjectionMatrix();
  }, [camera, cameraZoom]);

  useEffect(() => {
    camera.position.x = cameraX;
    camera.updateProjectionMatrix();
  }, [camera, cameraX]);

  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 1]} intensity={3} />
      <Box position={[-1.2, 0, 0]} />
      <Sphere position={[1.2, 0, 0]} />
      <Plane position={[0, 1.2, 0]} />
    </>
  );
}
