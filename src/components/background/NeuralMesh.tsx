import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Point {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
}

function NeuralMeshScene({ mousePos }: { mousePos: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Group>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  const pulseRef = useRef<number>(0);
  const { size, camera } = useThree();
  
  const { points, connections } = useMemo(() => {
    const pointCount = 50;
    const points: Point[] = [];
    const connections: number[] = [];
    
    // Create points in 3D space
    for (let i = 0; i < pointCount; i++) {
      points.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        connections: []
      });
    }
    
    // Create connections between nearby points
    for (let i = 0; i < pointCount; i++) {
      for (let j = i + 1; j < pointCount; j++) {
        const distance = points[i].position.distanceTo(points[j].position);
        if (distance < 4 && points[i].connections.length < 4 && points[j].connections.length < 4) {
          points[i].connections.push(j);
          points[j].connections.push(i);
          connections.push(i, j);
        }
      }
    }
    
    return { points, connections };
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current || !pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    pulseRef.current = time;

    // Update point positions with ambient drift
    const positions = new Float32Array(points.length * 3);
    const colors = new Float32Array(points.length * 3);
    
    points.forEach((point, i) => {
      // Ambient drift
      point.position.add(point.velocity);
      
      // Bounce off boundaries
      if (Math.abs(point.position.x) > 10) point.velocity.x *= -1;
      if (Math.abs(point.position.y) > 7.5) point.velocity.y *= -1;
      if (Math.abs(point.position.z) > 5) point.velocity.z *= -1;
      
      // Cursor attraction
      const mouseWorld = new THREE.Vector3(
        (mousePos.x / size.width) * 2 - 1,
        -(mousePos.y / size.height) * 2 + 1,
        0
      ).unproject(camera);
      
      const distanceToMouse = point.position.distanceTo(mouseWorld);
      if (distanceToMouse < 3) {
        const attraction = mouseWorld.clone().sub(point.position).multiplyScalar(0.01);
        point.position.add(attraction);
      }
      
      positions[i * 3] = point.position.x;
      positions[i * 3 + 1] = point.position.y;
      positions[i * 3 + 2] = point.position.z;
      
      // Aqua color with subtle brightness variation
      const brightness = 0.6 + 0.4 * Math.sin(time + i * 0.5);
      colors[i * 3] = 0.09 * brightness; // R
      colors[i * 3 + 1] = 0.82 * brightness; // G
      colors[i * 3 + 2] = 0.76 * brightness; // B
    });

    // Update line positions and colors
    const linePositions = new Float32Array(connections.length * 3);
    const lineColors = new Float32Array(connections.length * 3);
    
    for (let i = 0; i < connections.length; i += 2) {
      const p1 = points[connections[i]];
      const p2 = points[connections[i + 1]];
      
      // Line positions
      linePositions[i * 3] = p1.position.x;
      linePositions[i * 3 + 1] = p1.position.y;
      linePositions[i * 3 + 2] = p1.position.z;
      
      linePositions[(i + 1) * 3] = p2.position.x;
      linePositions[(i + 1) * 3 + 1] = p2.position.y;
      linePositions[(i + 1) * 3 + 2] = p2.position.z;
      
      // Orange pulse along some connections
      const pulsePhase = (time * 2 + i * 0.1) % 10;
      const isOrangePulse = pulsePhase < 0.5 && Math.random() > 0.95;
      
      if (isOrangePulse) {
        // Orange pulse
        lineColors[i * 3] = 0.88; // R
        lineColors[i * 3 + 1] = 0.36; // G  
        lineColors[i * 3 + 2] = 0.17; // B
        
        lineColors[(i + 1) * 3] = 0.88;
        lineColors[(i + 1) * 3 + 1] = 0.36;
        lineColors[(i + 1) * 3 + 2] = 0.17;
      } else {
        // Aqua color
        const alpha = 0.3 + 0.2 * Math.sin(time + i * 0.2);
        lineColors[i * 3] = 0.09 * alpha;
        lineColors[i * 3 + 1] = 0.82 * alpha;
        lineColors[i * 3 + 2] = 0.76 * alpha;
        
        lineColors[(i + 1) * 3] = 0.09 * alpha;
        lineColors[(i + 1) * 3 + 1] = 0.82 * alpha;
        lineColors[(i + 1) * 3 + 2] = 0.76 * alpha;
      }
    }

    // Update geometry
    pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <group ref={meshRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(points.length * 3), 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[new Float32Array(points.length * 3), 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={4} 
          vertexColors 
          sizeAttenuation={false}
          transparent
          opacity={0.8}
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(connections.length * 3), 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[new Float32Array(connections.length * 3), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          vertexColors 
          transparent 
          opacity={0.6}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

interface NeuralMeshProps {
  className?: string;
}

export function NeuralMesh({ className }: NeuralMeshProps) {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 800 600" 
          className="absolute inset-0 opacity-20"
        >
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(var(--goftus-aqua))" opacity="0.6" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="hsl(var(--goftus-aqua))" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="hsl(var(--goftus-aqua))" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <NeuralMeshScene mousePos={mousePos} />
      </Canvas>
    </div>
  );
}