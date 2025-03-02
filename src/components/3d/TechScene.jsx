import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, RoundedBox, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import MouseInteraction from './MouseInteraction';

const CodeParticles = ({ count = 20, color = "#3b82f6" }) => {
  const mesh = useRef();
  const [positions, setPositions] = useState([]);
  const [scales, setScales] = useState([]);
  const [rotations, setRotations] = useState([]);

  useEffect(() => {
    const tempPositions = [];
    const tempScales = [];
    const tempRotations = [];

    for (let i = 0; i < count; i++) {
      // Posições aleatórias em um círculo
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 4;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 5;
      const z = Math.sin(angle) * radius;
      
      tempPositions.push([x, y, z]);
      tempScales.push([0.1 + Math.random() * 0.3, 0.02, 0.3 + Math.random() * 0.5]);
      tempRotations.push([Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]);
    }

    setPositions(tempPositions);
    setScales(tempScales);
    setRotations(tempRotations);
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={mesh}>
      {positions.map((pos, i) => (
        <RoundedBox
          key={i}
          position={pos}
          scale={scales[i]}
          rotation={rotations[i]}
          radius={0.05}
          smoothness={4}
        >
          <meshStandardMaterial 
            color={color} 
            roughness={0.3} 
            metalness={0.8} 
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </RoundedBox>
      ))}
    </group>
  );
};

const FloatingDevice = ({ position, rotation, size, color }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1 + rotation[1];
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={1}
      position={position}
    >
      <group ref={ref} rotation={rotation}>
        {/* Base do dispositivo */}
        <RoundedBox 
          args={[size[0], size[1], size[2]]} 
          radius={0.08} 
          smoothness={4}
        >
          <meshStandardMaterial 
            color={color} 
            roughness={0.1} 
            metalness={0.8}
            envMapIntensity={1.5}
          />
        </RoundedBox>
        
        {/* Tela */}
        <RoundedBox 
          args={[size[0] * 0.9, size[1] * 0.9, 0.01]} 
          radius={0.04} 
          position={[0, 0, size[2] / 2 + 0.01]}
          smoothness={4}
        >
          <meshStandardMaterial 
            color="#111111" 
            roughness={0} 
            metalness={0}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </RoundedBox>
      </group>
    </Float>
  );
};

const ParticleField = ({ count = 100 }) => {
  const particles = useRef();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const tempPositions = [];
    for (let i = 0; i < count; i++) {
      const radius = 8;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius * Math.random();
      const y = (Math.random() - 0.5) * 10;
      const z = Math.sin(angle) * radius * Math.random();
      tempPositions.push([x, y, z]);
    }
    setPositions(tempPositions);
  }, [count]);

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={particles}>
      {positions.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.03, 6, 6]}>
          <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.4} 
          />
        </Sphere>
      ))}
    </group>
  );
};

const GradientSphere = ({ position = [0, 0, 0], size = 1, color1 = "#3b82f6", color2 = "#8b5cf6" }) => {
  const mesh = useRef();
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        roughness={0.3} 
        metalness={0.8} 
        color={color1}
        emissive={color2}
        emissiveIntensity={0.2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const TechScene = () => {
  const cameraRef = useRef();

  return (
    <Canvas
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        background: 'transparent' 
      }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]} // Otimização para dispositivos com tela de alta densidade
    >
      <Environment preset="city" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[0, 10, 5]} intensity={1} color="#ffffff" />

      {/* Adiciona interatividade com o mouse */}
      <MouseInteraction intensity={0.5} />

      {/* Partículas de código */}
      <CodeParticles count={24} color="#3b82f6" />
      <CodeParticles count={16} color="#8b5cf6" />
      
      {/* Dispositivos flutuantes */}
      <FloatingDevice 
        position={[2.5, 0.5, -1]} 
        rotation={[0, -Math.PI / 4, 0]} 
        size={[1.6, 1, 0.08]} 
        color="#2c3e50" 
      />
      <FloatingDevice 
        position={[-2, -0.8, 0]} 
        rotation={[0, Math.PI / 6, 0]} 
        size={[0.8, 1.4, 0.08]} 
        color="#111827" 
      />
      <FloatingDevice 
        position={[0, 1.5, -2]} 
        rotation={[0, 0, 0]} 
        size={[1, 0.6, 0.04]} 
        color="#1e293b" 
      />

      {/* Esferas gradiente */}
      <GradientSphere position={[3, -2, -3]} size={1.5} color1="#3b82f6" color2="#ec4899" />
      <GradientSphere position={[-3, 2, -4]} size={1} color1="#8b5cf6" color2="#06b6d4" />

      {/* Campo de partículas */}
      <ParticleField count={150} />
    </Canvas>
  );
};

export default TechScene; 