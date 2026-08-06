"use client";

import { RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function DeveloperDesk() {
  const characterRef = useRef<THREE.Group>(null);
  const monitorMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state, delta) => {
    const character = characterRef.current;
    const monitorMaterial = monitorMaterialRef.current;

    if (character) {
      const targetRotationY = -0.5 + state.pointer.x * 0.12;
      const smoothing = 1 - Math.exp(-delta * 4);

      character.rotation.y = THREE.MathUtils.lerp(
        character.rotation.y,
        targetRotationY,
        smoothing,
      );

      character.position.y =
        -0.45 + Math.sin(state.clock.elapsedTime * 1.5) * 0.015;
    }

    if (monitorMaterial) {
      monitorMaterial.emissiveIntensity =
        1.1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.15;
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Floor */}
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.45, 0]}
      >
        <circleGeometry args={[4, 64]} />
        <meshStandardMaterial color="#080b12" roughness={0.92} />
      </mesh>

      {/* Desk top */}
      <RoundedBox
        castShadow
        receiveShadow
        args={[3.9, 0.18, 1.65]}
        radius={0.08}
        smoothness={6}
        position={[0.4, -0.55, -0.25]}
      >
        <meshStandardMaterial color="#121824" roughness={0.55} />
      </RoundedBox>

      {/* Desk legs */}
      <mesh castShadow position={[-1.25, -1.02, -0.25]}>
        <boxGeometry args={[0.15, 0.85, 1.25]} />
        <meshStandardMaterial color="#090d14" />
      </mesh>

      <mesh castShadow position={[2.05, -1.02, -0.25]}>
        <boxGeometry args={[0.15, 0.85, 1.25]} />
        <meshStandardMaterial color="#090d14" />
      </mesh>

      {/* Monitor */}
      <group position={[0.85, 0.25, -0.65]} rotation={[0, -0.16, 0]}>
        <RoundedBox
          castShadow
          args={[1.85, 1.2, 0.12]}
          radius={0.08}
          smoothness={6}
        >
          <meshStandardMaterial
            color="#111827"
            metalness={0.25}
            roughness={0.45}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.065]}>
          <planeGeometry args={[1.62, 0.98]} />
          <meshStandardMaterial
            ref={monitorMaterialRef}
            color="#07121c"
            emissive="#22d3ee"
            emissiveIntensity={1.1}
            toneMapped={false}
          />
        </mesh>

        <mesh position={[0, -0.83, 0]}>
          <boxGeometry args={[0.12, 0.5, 0.1]} />
          <meshStandardMaterial color="#111827" />
        </mesh>

        <mesh position={[0, -1.08, 0.08]}>
          <boxGeometry args={[0.7, 0.08, 0.4]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      </group>

      {/* Keyboard */}
      <RoundedBox
        castShadow
        args={[1.35, 0.08, 0.45]}
        radius={0.035}
        smoothness={5}
        position={[0.25, -0.4, 0.25]}
        rotation={[0, -0.12, 0]}
      >
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </RoundedBox>

      {/* Character */}
      <group
        ref={characterRef}
        position={[-0.7, -0.45, 0.35]}
        rotation={[0, -0.5, 0]}
      >
        {/* Torso */}
        <mesh castShadow position={[0, 0.55, 0]}>
          <sphereGeometry args={[0.62, 48, 48]} />
          <meshStandardMaterial
            color="#182336"
            roughness={0.62}
            metalness={0.05}
          />
        </mesh>

        {/* Neck */}
        <mesh castShadow position={[0, 1.08, 0]}>
          <cylinderGeometry args={[0.17, 0.19, 0.35, 32]} />
          <meshStandardMaterial color="#d5a27e" roughness={0.7} />
        </mesh>

        {/* Head */}
        <mesh castShadow position={[0, 1.52, 0]}>
          <sphereGeometry args={[0.43, 64, 64]} />
          <meshStandardMaterial color="#d9a985" roughness={0.68} />
        </mesh>

        {/* Hair */}
        <mesh
          castShadow
          position={[-0.02, 1.72, -0.04]}
          scale={[1.02, 0.62, 1.02]}
        >
          <sphereGeometry
            args={[0.44, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.65]}
          />
          <meshStandardMaterial color="#10131a" roughness={0.8} />
        </mesh>

        {/* Left arm */}
        <mesh
          castShadow
          position={[0.42, 0.38, 0.28]}
          rotation={[0.3, 0.15, -0.85]}
        >
          <cylinderGeometry args={[0.12, 0.15, 0.9, 32]} />
          <meshStandardMaterial color="#182336" roughness={0.62} />
        </mesh>

        {/* Right arm */}
        <mesh
          castShadow
          position={[0.2, 0.25, 0.52]}
          rotation={[0.65, 0.05, -0.55]}
        >
          <cylinderGeometry args={[0.11, 0.14, 0.9, 32]} />
          <meshStandardMaterial color="#182336" roughness={0.62} />
        </mesh>

        {/* Chair */}
        <RoundedBox
          castShadow
          args={[1.15, 1.25, 0.22]}
          radius={0.12}
          smoothness={6}
          position={[-0.28, 0.18, -0.62]}
          rotation={[0, 0.12, 0]}
        >
          <meshStandardMaterial color="#0c111c" roughness={0.6} />
        </RoundedBox>
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [4.8, 2.5, 5.2],
          fov: 34,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.7} />

        <directionalLight
          castShadow
          color="#d9f8ff"
          intensity={3.2}
          position={[4, 6, 5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <pointLight
          color="#22d3ee"
          intensity={22}
          distance={8}
          position={[1.4, 1.3, 1.8]}
        />

        <pointLight
          color="#315cff"
          intensity={15}
          distance={7}
          position={[-3, 1, -2]}
        />

        <DeveloperDesk />
      </Canvas>
    </div>
  );
}