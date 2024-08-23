// import Cube from "./components/Cube";
import { Canvas } from "react-three-fiber";

import "./App.css";
import Sphere from "./components/Sphere";
// import Torus from "./components/Torus";
// import TorusKnot from "./components/TorusKnot";

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={1} />
      {/* illuminates all objects in the scene equally */}
      <ambientLight />

      {/* <Cube position={[0, 0, 0]} color="hotpink" size={[1, 1, 1]} /> */}

      <Sphere position={[0, 0, 1]} size={[0.6, 30, 30]} color="" />
      {/* <Torus position={[2, 0, 1]} size={[0.8, 0.1, 30]} color="hotpink" /> */}
      {/* <TorusKnot
        position={[-2, 0, 1]}
        size={[0.5, 0.1, 1000, 50]}
        color="hotpink"
      /> */}
    </Canvas>
  );
};

export default App;
