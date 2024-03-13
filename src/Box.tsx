import { useSpring, a } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

type Props = {
  position: [number, number, number];
};

export function Box({ position }: Props) {
  const [clicked, setClicked] = useState(false);
  const ref = useRef<Mesh>(null);
  const color = clicked ? 'hotpink' : 'orange';
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1 });

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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </a.mesh>
  );
}
