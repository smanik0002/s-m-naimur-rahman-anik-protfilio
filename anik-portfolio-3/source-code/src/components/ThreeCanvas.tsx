import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
  enableInteraction?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  className = '',
  enableInteraction = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0b0f17, 0.0018);

    // Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 80;
    cameraRef.current = camera;

    // WebGL Renderer with performance flags
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Particle System (Glowing Stars / Code Nodes)
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Palette: Cyan (#06b6d4), Neon Blue (#3b82f6), Sky Blue (#38bdf8), and White
    const palette = [
      new THREE.Color(0x06b6d4),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x3b82f6),
      new THREE.Color(0x60a5fa),
      new THREE.Color(0x93c5fd),
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 220;
      positions[i3 + 1] = (Math.random() - 0.5) * 160;
      positions[i3 + 2] = (Math.random() - 0.5) * 140;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular soft particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
      gradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.3)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 2. Futuristic 3D Geometric Floating Shapes
    // Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(12, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    icoMesh.position.set(45, 15, -20);
    mainGroup.add(icoMesh);

    // Inner Glowing Core for Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(6, 0);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    icoMesh.add(coreMesh);

    // Second Shape: Torus (Cyber Ring)
    const torusGeometry = new THREE.TorusGeometry(14, 1.2, 12, 40);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(-48, -18, -30);
    torusMesh.rotation.x = Math.PI / 4;
    mainGroup.add(torusMesh);

    // Third Shape: Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(8, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const octaMesh = new THREE.Mesh(octaGeometry, octaMaterial);
    octaMesh.position.set(-30, 28, -25);
    mainGroup.add(octaMesh);

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 120);
    pointLight.position.set(0, 0, 30);
    scene.add(pointLight);

    // Mouse Tracking for Parallax Effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!enableInteraction) return;
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      targetX = ((clientX / rect.width) * 2 - 1) * 20;
      targetY = (-(clientY / rect.height) * 2 + 1) * 20;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth === 0 || newHeight === 0) continue;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/group parallax damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = mouseX * 0.015 + elapsedTime * 0.03;
      mainGroup.rotation.x = -mouseY * 0.015;

      // Rotate geometric shapes
      icoMesh.rotation.x = elapsedTime * 0.25;
      icoMesh.rotation.y = elapsedTime * 0.35;
      coreMesh.rotation.x = -elapsedTime * 0.4;
      coreMesh.rotation.z = elapsedTime * 0.4;

      torusMesh.rotation.x = elapsedTime * 0.2 + mouseY * 0.01;
      torusMesh.rotation.y = elapsedTime * 0.15 + mouseX * 0.01;

      octaMesh.rotation.y = elapsedTime * 0.3;
      octaMesh.rotation.z = elapsedTime * 0.2;

      // Gentle floating oscillation
      icoMesh.position.y = 15 + Math.sin(elapsedTime * 0.8) * 3;
      torusMesh.position.y = -18 + Math.cos(elapsedTime * 0.7) * 3.5;
      octaMesh.position.y = 28 + Math.sin(elapsedTime * 0.9 + 1) * 2.5;

      // Particles subtle drift
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      octaGeometry.dispose();
      octaMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [enableInteraction]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
