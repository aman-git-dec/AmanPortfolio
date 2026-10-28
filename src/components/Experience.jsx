
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Float
          rotation-x={-Math.PI / 4}
          floatIntensity={0.15}
          speed={0.5}
          rotationIntensity={0.15}
      >
        <group position={[-0.3, 0.1, 0]}>
          <Book />
        </group>
      </Float>

      <OrbitControls />
      {/* <Environment preset="studio" /> */}

      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <pointLight position={[-3, 1, 2]} intensity={8} color="#6d5cff" />
      <pointLight position={[3, -1, 2]} intensity={5} color="#ff9a5c" />

      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
