"use client";

import { RoundedBox } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { type RefObject, useEffect, useRef } from "react";
import * as THREE from "three";

const CAMERA_START = new THREE.Vector3(6.6, 2.8, 7.4);
const CAMERA_END = new THREE.Vector3(7.8, 2.45, 3.9);

const LOOK_AT_START = new THREE.Vector3(1.7, 0.25, -0.25);
const LOOK_AT_END = new THREE.Vector3(2.45, 0.65, -0.65);

type ScrollProgressRef = RefObject<number>;

function CameraRig({ progressRef }: { progressRef: ScrollProgressRef }) {
  const { camera } = useThree();

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const progress = THREE.MathUtils.smoothstep(progressRef.current, 0, 1);

    targetPosition.current.lerpVectors(CAMERA_START, CAMERA_END, progress);

    targetLookAt.current.lerpVectors(LOOK_AT_START, LOOK_AT_END, progress);

    const smoothing = 1 - Math.exp(-delta * 4);

    camera.position.lerp(targetPosition.current, smoothing);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}

function DeveloperDesk({ progressRef }: { progressRef: ScrollProgressRef }) {
  const characterRef = useRef<THREE.Group>(null);
  const monitorMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  function CameraRig({ progressRef }: { progressRef: ScrollProgressRef }) {
    const { camera } = useThree();

    const targetPosition = useRef(new THREE.Vector3());
    const targetLookAt = useRef(new THREE.Vector3());

    useFrame((_, delta) => {
      const progress = THREE.MathUtils.smoothstep(progressRef.current, 0, 1);

      targetPosition.current.lerpVectors(CAMERA_START, CAMERA_END, progress);

      targetLookAt.current.lerpVectors(LOOK_AT_START, LOOK_AT_END, progress);

      const smoothing = 1 - Math.exp(-delta * 4);

      camera.position.lerp(targetPosition.current, smoothing);
      camera.lookAt(targetLookAt.current);
    });

    return null;
  }

  useFrame((state, delta) => {
    const character = characterRef.current;
    const monitorMaterial = monitorMaterialRef.current;

    if (character) {
      const turnProgress = THREE.MathUtils.smoothstep(
        progressRef.current,
        0.28,
        0.82,
      );

      const pointerInfluence = state.pointer.x * 0.05 * (1 - turnProgress);

      const targetRotationY =
        THREE.MathUtils.lerp(-0.9, 0.18, turnProgress) + pointerInfluence;

      const smoothing = 1 - Math.exp(-delta * 4);

      character.rotation.y = THREE.MathUtils.lerp(
        character.rotation.y,
        targetRotationY,
        smoothing,
      );

      character.position.y =
        -0.42 + Math.sin(state.clock.elapsedTime * 1.5) * 0.012;
    }

    if (monitorMaterial) {
      monitorMaterial.emissiveIntensity =
        0.65 + Math.sin(state.clock.elapsedTime * 1.8) * 0.08;
    }
  });

  return (
    <group position={[2.65, -0.35, -1.1]} rotation={[0, -0.12, 0]} scale={0.8}>
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
            emissiveIntensity={0.65}
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
        position={[-0.5, -0.42, 0.3]}
        rotation={[0, -0.9, 0]}
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
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const hero = document.getElementById("home");

      if (!hero) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const scrollDistance = Math.max(
        hero.offsetHeight - window.innerHeight,
        1,
      );

      const travelledDistance = THREE.MathUtils.clamp(
        -rect.top,
        0,
        scrollDistance,
      );

      scrollProgressRef.current = travelledDistance / scrollDistance;
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [6.6, 2.8, 7.4],
          fov: 30,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          castShadow
          color="#e6fbff"
          intensity={4}
          position={[4, 6, 5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <pointLight
          color="#ffb36b"
          intensity={22}
          distance={7}
          position={[2.2, 3, 3.6]}
        />

        <pointLight
          color="#22d3ee"
          intensity={28}
          distance={9}
          position={[2.5, 2.2, 2.8]}
        />

        <pointLight
          color="#8b5cf6"
          intensity={24}
          distance={9}
          position={[-1.5, 2, -1.5]}
        />

        <CameraRig progressRef={scrollProgressRef} />
        <DeveloperDesk progressRef={scrollProgressRef} />
      </Canvas>
    </div>
  );
}
