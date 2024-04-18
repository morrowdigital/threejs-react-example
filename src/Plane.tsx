import { useSpring, a } from '@react-spring/three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, DoubleSide, TextureLoader, RepeatWrapping } from 'three';

type Props = {
  position: [number, number, number];
};

export function Plane({ position }: Props) {
  const [clicked, setClicked] = useState(false);
  const ref = useRef<Mesh>(null);
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1 });

  const texture = useLoader(
    TextureLoader,
    'https://picsum.photos/seed/seed/200',
  );

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(2, 2);

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
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial map={texture} side={DoubleSide} />
    </a.mesh>
  );
}
