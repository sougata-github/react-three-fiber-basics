// import Cube from "./Cube";
// import Sphere from "./Sphere";
// import Torus from "./Torus";
import { useRef } from "react";
import TorusKnot from "./TorusKnot";

// import { useControls } from "leva";
import { DirectionalLightHelper } from "three";
import { OrbitControls, useHelper } from "@react-three/drei";

const Scene = () => {
  // const { lightColor, lightIntensity } = useControls({
  //   lightColor: "white",
  //   lightIntensity: {
  //     value: 0.5,
  //     min: 0,
  //     max: 5,
  //   },
  // });

  const directionalLightRef = useRef(null!);
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={1}
        // ref={directionalLightRef}
        // color={lightColor}
      />
      {/* illuminates all objects in the scene equally */}
      <ambientLight />

      {/* <Cube position={[0, 0, 0]} color="hotpink" size={[1, 1, 1]} /> */}

      {/* <Sphere position={[0, 0, 1]} size={[0.6, 30, 30]} color="grey" /> */}

      {/* <Torus position={[2, 0, 1]} size={[0.2, 0.1, 30]} color="hotpink" /> */}

      <TorusKnot
        position={[0, 0, 0]}
        size={[0.8, 0.2, 1000, 50]}
        color="hotpink"
      />

      <OrbitControls enableZoom={false} />
    </>
  );
};

export default Scene;
