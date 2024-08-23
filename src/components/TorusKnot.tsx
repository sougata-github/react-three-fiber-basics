/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useControls } from "leva";

interface TorusKnotProps {
  position: [number, number, number];
  size: [number, number, number, number];
  color: string;
}

const TorusKnot = ({ position, size, color }: TorusKnotProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  // const { color, radius } = useControls({
  //   color: "hotpink",
  //   radius: {
  //     value: 5,
  //     min: 1,
  //     max: 10,
  //     step: 0.5,
  //   },
  // });

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  // });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial color={color} factor={2} speed={2} />
    </mesh>
  );
};

export default TorusKnot;
