import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function AdvancedBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          metalness={0.9} 
          roughness={0.1} 
          clearcoat={1} 
          clearcoatRoughness={0.1}
          transmission={0.5}
          thickness={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeJSCanvas() {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden relative bg-black">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <AdvancedBox />
          
          <Text
            position={[0, 0, -2]}
            fontSize={0.8}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.ttf"
          >
            NARRATIVE LOOM
            <meshStandardMaterial metalness={0.8} roughness={0.2} color="#ffffff" />
          </Text>

          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
