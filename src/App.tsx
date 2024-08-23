import "./App.css";
import Scene from "./components/Scene";
import { Canvas } from "react-three-fiber";

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
