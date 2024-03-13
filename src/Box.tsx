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

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
      ref.current.rotation.y += 0.03;
    }
  });
  const onClick = () => setClicked(!clicked);
  const scale = clicked ? 1.5 : 1;

  return (
    <mesh position={position} onClick={onClick} scale={scale} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
