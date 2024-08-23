import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

interface TorusProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}

const Torus = ({ position, size, color }: TorusProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
