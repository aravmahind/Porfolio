// components/LaptopModel.js
import React from "react";
import { useGLTF } from "@react-three/drei";

const LaptopModel = () => {
  const { scene } = useGLTF("/models/gaming_laptop.glb");
  return <primitive object={scene} scale={0.8} position={[1.5, -0.5, 0]} />;
};

export default LaptopModel;
