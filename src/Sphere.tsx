import { useSpring, a } from '@react-spring/three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useAssets } from 'expo-asset';
import { useRef, useState } from 'react';
import { Mesh, Texture, TextureLoader } from 'three';

type Props = {
  position: [number, number, number];
  imageUrl: string;
};

export function SphereMesh({ position, imageUrl }: Props) {
  const [clicked, setClicked] = useState(false);
  const ref = useRef<Mesh>(null);
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1 });

  const texture = useLoader(TextureLoader, imageUrl) as Texture;

  useFrame(() => {
    if (ref.current) {
      // ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
      // ref.current.rotation.y += 0.03;
    }
  });
  const onClick = () => setClicked(!clicked);

  return (
    <a.mesh position={position} onClick={onClick} scale={scale} ref={ref}>
      <sphereGeometry args={[0.75]} />
      <meshStandardMaterial map={texture} />
      {/*<meshBasicMaterial wireframe />*/}
    </a.mesh>
  );
}

export function Sphere(props: Omit<Props, 'imageUrl'>) {
  const [assets] = useAssets([require('../assets/2k_earth_daymap.jpeg')]);
  const imageUrl = assets?.[0]?.localUri;

  if (!imageUrl) {
    return null;
  }

  return <SphereMesh {...props} imageUrl={imageUrl} />;
}
