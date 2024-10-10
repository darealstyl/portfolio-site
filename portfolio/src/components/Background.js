import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Background() {
  const meshRef = useRef();

  // Ensure uniforms are initialized properly
  const uniforms = useRef({
    time: { value: 0 },
    uColor: { value: new THREE.Color(0xff6347) },  // Base color of the object
    uOpacity: { value: 1.0 },  // Initial opacity
  });

  // Rotation speeds
  const rotationSpeedY = 0.001; // Y-axis rotation speed
  const rotationSpeedZ = 0.00005; // Z-axis rotation speed
  const rotationSpeedX = 0.00005; // X-axis rotation speed
  const colorChangeSpeed = 0.02;
  const opacityChangeSpeed = 0.3;

  // Vertex shader with increased deformation speed
  const vertexShader = `
    uniform float time;
    varying vec3 vNormal;

    void main() {
      vNormal = normalize(normalMatrix * normal);

      // Wavy distortion along the Z axis based on the X and Y position
      vec3 pos = position;

      // Increase the speed of deformation
      float speed = 300.0; // Adjust this value to control the speed
      pos.z += sin(pos.x * 1000.0 + time * speed) * 0.1;
      pos.z += cos(pos.y * 1000.0 + time * speed) * 0.1;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  // Fragment shader with color and opacity
  const fragmentShader = `
    uniform vec3 uColor;   // Color uniform
    uniform float uOpacity; // Opacity uniform

    void main() {
      gl_FragColor = vec4(uColor, uOpacity); // Set the color with the varying opacity
    }
  `;

  // Rotate and update color and opacity in each frame
  useFrame(({ clock }) => {
    if (meshRef.current && uniforms.current) {
      // Rotate the sphere around both the Y and Z axes
      meshRef.current.rotation.x += rotationSpeedX; // Rotate around the X axis
      meshRef.current.rotation.y += rotationSpeedY; // Rotate around the Y axis
      meshRef.current.rotation.z += rotationSpeedZ; // Rotate around the Z axis

      const elapsedTime = clock.getElapsedTime();

      // Cycle through colors
      const r = Math.sin(elapsedTime * colorChangeSpeed) * 0.5 + 0.5;
      const g = Math.cos(elapsedTime * colorChangeSpeed + Math.PI / 3) * 0.5 + 0.5;
      const b = Math.sin(elapsedTime * colorChangeSpeed + Math.PI / 2) * 0.5 + 0.5;

      // Update the uniform color
      uniforms.current.uColor.value.set(r, g, b);

      // Cycle opacity between 0.2 and 1.0
      const opacity = Math.abs(Math.sin(elapsedTime * opacityChangeSpeed)) * 0.3 + 0.15;
      uniforms.current.uOpacity.value = opacity;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <sphereGeometry args={[2, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        wireframe={true} // Enable wireframe effect
        transparent={true} // Enable transparency for the material
      />
    </mesh>
  );
}

export default Background;
