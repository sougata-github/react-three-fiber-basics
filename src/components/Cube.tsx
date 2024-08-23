import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

interface CubeProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}

const Cube = ({ position, size, color }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  //for animations
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta;

    // ref.current.rotation.y += delta * 2;

    //moving the cube
    // ref.current.position.y += delta;
    // ref.current.position.y -= delta;
    // ref.current.position.z = delta;

    // ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2;

    // ref.current.position.y = Math.sin(0); -> 0
    // ref.current.position.y = Math.sin(90); -> 1

    ref.current.position.y = Math.sin(state.clock.elapsedTime);

    // ref.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime));
  });

  return (
    <mesh position={position} ref={ref}>
      {/* 
      args={[2, 2, 4]}
      default is [1,1,1] 1/1/1 -> x,y,z axes */}

      {/* shape */}
      <boxGeometry args={size} />

      {/* material */}
      {/* <meshBasicMaterial /> */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;
