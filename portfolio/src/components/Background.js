// BackgroundSphere.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Background() {
  const meshRef = useRef();

  // Optional: Add rotation or animations
  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color={0xadd8e6} />
    </mesh>
  );
}

export default Background;
