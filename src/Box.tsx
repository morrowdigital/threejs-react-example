type Props = {
  position: [number, number, number];
};

export function Box({ position }: Props) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color='orange' />
    </mesh>
  );
}
