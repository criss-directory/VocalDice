'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type AIVoiceBackgroundProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function AIVoiceBackground({ className, ...props }: AIVoiceBackgroundProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient || !canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();

		// Dot grid parameters
		const dotSize = 2;
		const dotSpacing = 20;
		const dotColor = 'rgba(255, 255, 255, 0.3)';
		const activeDotColor = 'rgba(59, 130, 246, 0.6)';

		// Create dot grid
		const dots: { x: number; y: number; active: boolean; targetActive: boolean }[] = [];
		for (let x = 0; x < canvas.width; x += dotSpacing) {
			for (let y = 0; y < canvas.height; y += dotSpacing) {
				dots.push({
					x,
					y,
					active: false,
					targetActive: false,
				});
			}
		}

		let time = 0;
		let animationId: number;

		// Wave parameters for background
		const waves = [
			{ amplitude: 30, frequency: 0.008, phase: 0, yOffset: canvas.height * 0.2 },
			{ amplitude: 25, frequency: 0.005, phase: Math.PI / 3, yOffset: canvas.height * 0.8 },
		];

		const drawWaveLines = (currentTime: number) => {
			waves.forEach((wave) => {
				ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
				ctx.lineWidth = 1;
				ctx.lineCap = 'round';
				ctx.beginPath();

				for (let x = 0; x <= canvas.width; x += 10) {
					const y =
						wave.yOffset +
						Math.sin(x * wave.frequency + currentTime * 0.02 + wave.phase) *
							wave.amplitude;
					if (x === 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}
				}
				ctx.stroke();
			});
		};

		const drawDotGrid = () => {
			dots.forEach((dot) => {
				// Smooth transition for active state
				dot.active += (dot.targetActive ? 1 : -1) * 0.1;
				dot.active = Math.max(0, Math.min(1, dot.active));

				const opacity = 0.3 + dot.active * 0.4;
				const color = dot.active > 0.1 ? activeDotColor : dotColor;

				// Draw dot with glow effect when active
				if (dot.active > 0.1) {
					ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
					ctx.beginPath();
					ctx.arc(dot.x, dot.y, dotSize * 3, 0, Math.PI * 2);
					ctx.fill();
				}

				// Draw main dot
				ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${opacity})`);
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
				ctx.fill();
			});
		};

		const drawHeadsetIcon = (currentTime: number) => {
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const scale = 1 + Math.sin(currentTime * 0.02) * 0.05; // Subtle pulse

			ctx.save();
			ctx.translate(centerX, centerY);
			ctx.scale(scale, scale);

			// Headset band
			ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.arc(0, 0, 40, Math.PI * 0.3, Math.PI * 0.7, false);
			ctx.stroke();

			// Left ear cup
			ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
			ctx.beginPath();
			ctx.arc(-35, 20, 15, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
			ctx.lineWidth = 2;
			ctx.stroke();

			// Right ear cup
			ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
			ctx.beginPath();
			ctx.arc(35, 20, 15, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
			ctx.lineWidth = 2;
			ctx.stroke();

			// Mic boom
			ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(-35, 30);
			ctx.lineTo(-50, 50);
			ctx.stroke();

			// Mic tip
			ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
			ctx.beginPath();
			ctx.arc(-50, 55, 5, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
			ctx.lineWidth = 1.5;
			ctx.stroke();

			ctx.restore();
		};

		const activateDotsAroundHeadset = (currentTime: number) => {
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const radius = 150 + Math.sin(currentTime * 0.03) * 30;

			dots.forEach((dot) => {
				const distance = Math.sqrt(
					Math.pow(dot.x - centerX, 2) + Math.pow(dot.y - centerY, 2)
				);
				dot.targetActive = distance < radius && distance > radius - 60 ? 1 : 0;
			});
		};

		const animate = () => {
			// Clear canvas
			ctx.fillStyle = '#000000';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw wave lines in background
			drawWaveLines(time);

			// Update and activate dots around headset
			activateDotsAroundHeadset(time);

			// Draw dot grid
			drawDotGrid();

			// Draw headset icon
			drawHeadsetIcon(time);

			time++;
			animationId = requestAnimationFrame(animate);
		};

		const handleResize = () => {
			resizeCanvas();
		};

		window.addEventListener('resize', handleResize);
		animate();

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);
		};
	}, [isClient]);

	if (!isClient) {
		return <div className={cn('absolute inset-0 bg-black', className)} {...props} />;
	}

	return (
		<canvas
			ref={canvasRef}
			className={cn('absolute inset-0 w-full h-full', className)}
			{...props}
		/>
	);
}
