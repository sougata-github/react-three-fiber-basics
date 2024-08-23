import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
// import { MeshWobbleMaterial } from "@react-three/drei";

interface SphereProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}

const Sphere = ({ position, size, color }: SphereProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  const [isHover, setIsHover] = useState(false);

  useFrame((state, delta) => {
    const speed = isHover ? 1.2 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setIsHover(true);
      }}
      onPointerLeave={() => setIsHover(false)}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHover ? "green" : color} wireframe />
      {/* <MeshWobbleMaterial color="hotpink" wireframe /> */}
    </mesh>
  );
};

export default Sphere;
