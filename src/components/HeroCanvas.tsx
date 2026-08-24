"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Particle nodes creation - distributed wider to frame the text
    const particleCount = 45;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const bounds = 85;
    for (let i = 0; i < particleCount; i++) {
      // Push particles slightly more towards the perimeter
      const angle = Math.random() * Math.PI * 2;
      const radius = 25 + Math.random() * (bounds - 25);

      positions[i * 3] = Math.cos(angle) * radius * 1.4;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      velocities.push({
        x: (Math.random() - 0.5) * 0.025,
        y: (Math.random() - 0.5) * 0.025,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    // Subtle refined teal dots
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0d9488,
      size: 3.0,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Dynamic Connecting Lines
    const maxConnections = particleCount * 4;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3),
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.12,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse tracking with lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 12;
      targetY = (e.clientY / innerHeight - 0.5) * 12;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      scene.rotation.y = mouseX * 0.02;
      scene.rotation.x = mouseY * 0.02;

      // Update particle positions
      const posArray = particleGeometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        // Bounce at boundaries
        const xLimit = (bounds * 1.8) / 2;
        const yLimit = (bounds * 1.2) / 2;
        const zLimit = (bounds * 0.8) / 2;

        if (Math.abs(posArray[i * 3]) > xLimit) velocities[i].x *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > yLimit) velocities[i].y *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > zLimit) velocities[i].z *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Calculate connections within threshold distance
      let lineIndex = 0;
      const maxDistance = 22;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance && lineIndex < maxConnections * 6 - 6) {
            linePositions[lineIndex++] = posArray[i * 3];
            linePositions[lineIndex++] = posArray[i * 3 + 1];
            linePositions[lineIndex++] = posArray[i * 3 + 2];

            linePositions[lineIndex++] = posArray[j * 3];
            linePositions[lineIndex++] = posArray[j * 3 + 1];
            linePositions[lineIndex++] = posArray[j * 3 + 2];
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-70"
      aria-hidden="true"
    />
  );
}
