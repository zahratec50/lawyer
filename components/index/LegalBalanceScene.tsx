"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function BalanceModel() {
  const balanceRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (balanceRef.current) {
      balanceRef.current.rotation.y = Math.sin(time * 0.25) * 0.12;
    }

    if (beamRef.current) {
      beamRef.current.rotation.z = Math.sin(time * 0.45) * 0.035;
    }
  });

  const brass = "#B99A69";
  const darkBrass = "#78603F";
  const burgundy = "#641F2B";

  return (
    <group ref={balanceRef} position={[0, -0.15, 0]}>
      {/* Base */}
      <mesh position={[0, -1.65, 0]} castShadow>
        <cylinderGeometry args={[0.85, 1.05, 0.18, 64]} />
        <meshStandardMaterial
          color={burgundy}
          metalness={0.35}
          roughness={0.38}
        />
      </mesh>

      <mesh position={[0, -1.5, 0]} castShadow>
        <cylinderGeometry args={[0.38, 0.56, 0.15, 48]} />
        <meshStandardMaterial color={brass} metalness={0.8} roughness={0.24} />
      </mesh>

      {/* Central pillar */}
      <mesh position={[0, -0.65, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.15, 1.65, 32]} />
        <meshStandardMaterial color={brass} metalness={0.82} roughness={0.22} />
      </mesh>

      <mesh position={[0, 0.22, 0]} castShadow>
        <sphereGeometry args={[0.19, 32, 24]} />
        <meshStandardMaterial color={brass} metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Balanced beam */}
      <group ref={beamRef} position={[0, 0.22, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.7, 0.075, 0.09]} />
          <meshStandardMaterial
            color={brass}
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {([-1, 1] as const).map((side) => (
          <group key={side} position={[side * 1.02, -0.02, 0]}>
            <mesh position={[0, -0.43, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.78, 12]} />
              <meshStandardMaterial
                color={darkBrass}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>

            <mesh position={[0, -0.82, 0]} castShadow>
              <cylinderGeometry args={[0.42, 0.28, 0.09, 48, 1, true]} />
              <meshStandardMaterial
                color={brass}
                metalness={0.75}
                roughness={0.25}
                side={THREE.DoubleSide}
              />
            </mesh>

            <mesh position={[0, -0.86, 0]}>
              <torusGeometry args={[0.415, 0.018, 12, 48]} />
              <meshStandardMaterial
                color={brass}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </group>
        ))}

        <mesh position={[0, 0.09, 0]}>
          <sphereGeometry args={[0.11, 24, 24]} />
          <meshStandardMaterial
            color="#E0C59B"
            metalness={0.85}
            roughness={0.18}
          />
        </mesh>
      </group>

      {/* Decorative vertical ring */}
      <mesh rotation={[Math.PI / 2.8, 0.3, -0.25]} position={[0, 0.05, -0.22]}>
        <torusGeometry args={[1.62, 0.008, 8, 120]} />
        <meshBasicMaterial color={brass} transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

export default function LegalBalanceScene() {
  return (
    <div
      className="relative h-[280px] w-full sm:h-[360px] lg:h-[440px]"
      role="img"
      aria-label="تصویر سه‌بعدی انتزاعی ترازوی عدالت"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full bg-gold/10 blur-3xl"
      />

      <Canvas
        camera={{ position: [0, 0.15, 6.6], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        fallback={<div className="h-full w-full" />}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 4]} intensity={2.2} />
        <pointLight position={[-3, 1, 2]} intensity={30} color="#D5B47E" />

        <BalanceModel />

        <ContactShadows
          position={[0, -1.76, 0]}
          opacity={0.25}
          scale={4.5}
          blur={2.5}
          far={3}
        />

        <Environment preset="studio" />
      </Canvas>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
    </div>
  );
}
