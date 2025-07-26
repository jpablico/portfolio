import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';

export default function AboutTree() {
  return (
    <div className="h-[400px] w-full md:h-[500px]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} />
          <Tree />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Tree() {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  // super-simplified: trunk + a few branches
  return (
    <group ref={group}>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 2.0, 12]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      {/* Branches */}
      <mesh position={[0.3, 1.4, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.08, 0.9, 10]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      <mesh position={[-0.35, 1.2, 0.1]} rotation={[0, 0, -Math.PI / 3]}>
        <cylinderGeometry args={[0.04, 0.07, 0.8, 10]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* Leaves */}
      <mesh position={[0, 2.2, 0]}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0.5, 1.9, -0.2]}>
        <icosahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      <mesh position={[-0.45, 1.95, 0.3]}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>
    </group>
  );
}