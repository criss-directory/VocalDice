'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient || !containerRef.current) return;

		const SEPARATION = 120;
		const AMOUNTX = 50;
		const AMOUNTY = 40;

		// Scene setup
		const scene = new THREE.Scene();
		const bgColor = 0x000000; // Black background
		scene.background = new THREE.Color(bgColor);
		scene.fog = new THREE.Fog(bgColor, 5000, 15000);

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			10000,
		);
		camera.position.set(0, 200, 800);

		const renderer = new THREE.WebGLRenderer({
			alpha: false,
			antialias: true,
			powerPreference: 'high-performance',
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(bgColor, 1);

		// Clear previous canvas if exists
		while (containerRef.current.firstChild) {
			containerRef.current.removeChild(containerRef.current.firstChild);
		}

		containerRef.current.appendChild(renderer.domElement);

		// Create particles
		const positions: number[] = [];
		const colors: number[] = [];

		const geometry = new THREE.BufferGeometry();

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 100;
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				
				// White dots for all themes
				colors.push(1.0, 1.0, 1.0);
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		// Create material with larger points
		const material = new THREE.PointsMaterial({
			size: 6,
			vertexColors: true,
			transparent: false,
			sizeAttenuation: true,
		});

		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let count = 0;
		let animationId: number;

		// Animation function
		const animate = () => {
			animationId = requestAnimationFrame(animate);

			const positionAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;
			const positionsArray = positionAttribute.array as Float32Array;

			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;

					// Animate Y position with sine waves
					positionsArray[index + 1] =
						100 +
						Math.sin((ix + count) * 0.15) * 80 +
						Math.sin((iy + count) * 0.1) * 80;

					i++;
				}
			}

			positionAttribute.needsUpdate = true;
			renderer.render(scene, camera);
			count += 0.05;
		};

		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		// Start animation
		animate();

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);

			geometry.dispose();
			material.dispose();
			renderer.dispose();

			if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
				containerRef.current.removeChild(renderer.domElement);
			}
		};
	}, [isClient]);

	if (!isClient) {
		return <div className={cn('absolute inset-0 bg-black', className)} {...props} />;
	}

	return (
		<div
			ref={containerRef}
			className={cn('absolute inset-0 w-full h-full bg-black', className)}
			{...props}
		/>
	);
}
