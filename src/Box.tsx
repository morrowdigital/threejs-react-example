import { useSpring, a } from '@react-spring/three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';

type Props = {
  position: [number, number, number];
};

export function Box({ position }: Props) {
  const [clicked, setClicked] = useState(false);
  const ref = useRef<Mesh>(null);
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1 });

  const texture = useLoader(
    TextureLoader,
    'https://picsum.photos/seed/threejs/200',
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
      ref.current.rotation.y += 0.03;
    }
  });

  const onClick = () => setClicked(!clicked);

  const colors = ['red', 'green', 'blue', 'orange', 'purple'];
  const ColorMaterials = colors.map((color, index) => (
    <meshStandardMaterial
      key={color}
      color={color}
      attach={`material-${index}`}
    />
  ));

  return (
    <a.mesh position={position} onClick={onClick} scale={scale} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      {ColorMaterials}
      <meshStandardMaterial map={texture} attach='material-5' />
    </a.mesh>
  );
}
