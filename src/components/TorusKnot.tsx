import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
// import { useFrame } from "react-three-fiber";

interface TorusKnotProps {
  position: [number, number, number];
  size: [number, number, number, number];
  color: string;
}

const TorusKnot = ({ position, size, color }: TorusKnotProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default TorusKnot;
