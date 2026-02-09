'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type AudioWaveBackgroundProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function AudioWaveBackground({ className, ...props }: AudioWaveBackgroundProps) {
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

		// Wave parameters
		const waves: {
			amplitude: number;
			frequency: number;
			phase: number;
			color: string;
			yOffset: number;
		}[] = [
			{
				amplitude: 40,
				frequency: 0.005,
				phase: 0,
				color: 'rgba(255, 255, 255, 0.15)',
				yOffset: canvas.height * 0.3,
			},
			{
				amplitude: 30,
				frequency: 0.007,
				phase: Math.PI / 4,
				color: 'rgba(59, 130, 246, 0.1)',
				yOffset: canvas.height * 0.4,
			},
			{
				amplitude: 50,
				frequency: 0.003,
				phase: Math.PI / 2,
				color: 'rgba(255, 255, 255, 0.08)',
				yOffset: canvas.height * 0.5,
			},
			{
				amplitude: 35,
				frequency: 0.006,
				phase: (3 * Math.PI) / 4,
				color: 'rgba(59, 130, 246, 0.08)',
				yOffset: canvas.height * 0.6,
			},
		];

		let time = 0;
		let animationId: number;

		const drawWave = (wave: typeof waves[0], currentTime: number) => {
			ctx.strokeStyle = wave.color;
			ctx.lineWidth = 2;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			ctx.beginPath();

			for (let x = 0; x < canvas.width; x += 5) {
				const y =
					wave.yOffset +
					Math.sin(x * wave.frequency + currentTime * 0.03 + wave.phase) *
						wave.amplitude;
				if (x === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}
			}

			ctx.stroke();
		};

		const drawCenterLine = () => {
			ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(0, canvas.height / 2);
			ctx.lineTo(canvas.width, canvas.height / 2);
			ctx.stroke();
		};

		const drawVerticalBars = (currentTime: number) => {
			const barWidth = 4;
			const spacing = 12;
			const barCount = Math.ceil(canvas.width / spacing);

			for (let i = 0; i < barCount; i++) {
				const x = i * spacing;
				const baseHeight = 30;
				const wave1 = Math.sin(currentTime * 0.05 + i * 0.2) * 20;
				const wave2 = Math.sin(currentTime * 0.03 + i * 0.3) * 15;
				const height = baseHeight + wave1 + wave2;

				// Top bar
				ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + 0.2 * (wave1 / 20)})`;
				ctx.fillRect(
					x,
					canvas.height / 2 - height - 40,
					barWidth,
					height
				);

				// Bottom bar
				ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + 0.2 * (wave2 / 20)})`;
				ctx.fillRect(
					x,
					canvas.height / 2 + 40,
					barWidth,
					height
				);
			}
		};

		const animate = () => {
			// Clear canvas with black background
			ctx.fillStyle = '#000000';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw waves
			waves.forEach((wave) => {
				drawWave(wave, time);
			});

			// Draw center vertical bars (audio equalizer effect)
			drawVerticalBars(time);

			// Draw center line
			drawCenterLine();

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
