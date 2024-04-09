import { useSpring, a } from '@react-spring/three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, Texture, TextureLoader } from 'three';

type Props = {
  position: [number, number, number];
};

export function Sphere({ position }: Props) {
  const [clicked, setClicked] = useState(false);
  const ref = useRef<Mesh>(null);
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1 });

  const texture = useLoader(
    TextureLoader,
    require('../assets/2k_earth_daymap.jpeg'),
  ) as Texture;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
      ref.current.rotation.y += 0.03;
    }
  });
  const onClick = () => setClicked(!clicked);

  return (
    <a.mesh position={position} onClick={onClick} scale={scale} ref={ref}>
      <sphereGeometry args={[0.75]} />
      <meshStandardMaterial map={texture} />
      {/*<meshBasicMaterial color={color} wireframe />*/}
    </a.mesh>
  );
}
