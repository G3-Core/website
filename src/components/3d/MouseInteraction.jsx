import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector2 } from 'three';

const MouseInteraction = ({ intensity = 0.1 }) => {
  const cameraPositionRef = useRef(null);
  const initialCameraPositionRef = useRef(null);
  const mouseRef = useRef(new Vector2());
  const targetPositionRef = useRef(new Vector2());
  const isMovingRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normaliza a posição do mouse para -1 a 1
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
      
      // Indica que o mouse está se movendo
      isMovingRef.current = true;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Usando useFrame para atualizações suaves da câmera
  useFrame(({ camera }) => {
    // Inicializa as referências na primeira execução
    if (!initialCameraPositionRef.current) {
      initialCameraPositionRef.current = camera.position.clone();
      cameraPositionRef.current = camera.position;
      targetPositionRef.current.copy(camera.position);
    }

    if (isMovingRef.current) {
      // Calcula a posição alvo baseada na posição do mouse
      targetPositionRef.current.x = initialCameraPositionRef.current.x + mouseRef.current.x * intensity;
      targetPositionRef.current.y = initialCameraPositionRef.current.y + mouseRef.current.y * intensity;
      
      // Aplica suavização ao movimento da câmera (efeito de mola)
      camera.position.x += (targetPositionRef.current.x - camera.position.x) * 0.05;
      camera.position.y += (targetPositionRef.current.y - camera.position.y) * 0.05;
      
      // Mantém a câmera olhando para o centro da cena
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

export default MouseInteraction; 