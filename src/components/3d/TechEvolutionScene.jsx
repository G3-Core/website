import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, OrbitControls } from '@react-three/drei';
import { useApp } from '../../contexts/AppContext';

const TechnologySphere = ({ position, size, name, textColor, isHighlighted, onClick, orbitRadius, orbitSpeed, orbitOffset }) => {
  const meshRef = useRef();
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (meshRef.current && orbitRadius) {
      const t = clock.getElapsedTime() * orbitSpeed + orbitOffset;
      meshRef.current.position.set(
        Math.sin(t) * orbitRadius,
        position[1] + Math.sin(t * 0.5) * 0.5,
        Math.cos(t) * orbitRadius
      );
      if (textRef.current) {
        textRef.current.position.set(
          meshRef.current.position.x,
          meshRef.current.position.y + size * 1.4,
          meshRef.current.position.z
        );
      }
    }
  });

  return (
    <>
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshPhongMaterial 
          color={hovered || isHighlighted ? "#00BFFF" : "#104F89"} 
          emissive={hovered || isHighlighted ? "#00BFFF" : "#104F89"}
          emissiveIntensity={hovered || isHighlighted ? 1.0 : 0.5}
          transparent
          opacity={0.8}
          wireframe={!isHighlighted && !hovered}
        />
      </Sphere>
      <Text
        ref={textRef}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.35}
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {name}
      </Text>
    </>
  );
};

const CentralOrb = ({ position, size }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <meshPhongMaterial color="#00BFFF" emissive="#00BFFF" emissiveIntensity={1} transparent opacity={0.9} />
      </Sphere>
      <Text
        position={[position[0], position[1], position[2]]}
        fontSize={0.6}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        G3 Tech
      </Text>
    </>
  );
};

const TechCluster = ({ technologies, isModern }) => {
  const { theme } = useApp();
  const [selectedTech, setSelectedTech] = useState(null);
  const textColor = theme === 'dark' ? '#FFFFFF' : '#104F89';
  
  return (
    <group>
      {isModern && <CentralOrb position={[0, 0, 0]} size={1.5} />}
      {technologies.map((tech, index) => {
        const orbitRadius = 4 + (index % 3) * 1.5;
        const orbitSpeed = 0.1 + (index * 0.02);
        const orbitOffset = index * (Math.PI * 2) / technologies.length;
        const initialY = isModern ? 0 : -2;
        
        return (
          <TechnologySphere
            key={tech}
            name={tech}
            position={[Math.sin(orbitOffset) * orbitRadius, initialY, Math.cos(orbitOffset) * orbitRadius]}
            size={0.6 + (index % 3) * 0.1}
            textColor={textColor}
            isHighlighted={selectedTech === index}
            onClick={() => setSelectedTech(selectedTech === index ? null : index)}
            orbitRadius={orbitRadius}
            orbitSpeed={orbitSpeed}
            orbitOffset={orbitOffset}
          />
        );
      })}
    </group>
  );
};

const Scene = () => {
  const modernTechs = ["React", "Node.js", "TypeScript", "Next.js", "Three.js", "Tailwind CSS", "Material UI", "Firebase", "MongoDB", "MySQL", "WordPress"];
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <TechCluster technologies={modernTechs} isModern={true} />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
    </>
  );
};

const TechEvolutionScene = () => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
    
  );
};

export default TechEvolutionScene;
