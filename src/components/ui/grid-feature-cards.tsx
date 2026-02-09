import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
	accentColor?: string;
};

export function FeatureCard({ feature, className, accentColor = "from-amber-900/40 via-orange-900/30 to-amber-800/20", ...props }: FeatureCardProps) {
	const [isHovered, setIsHovered] = React.useState(false);
	const p = genRandomPattern();

	return (
		<div 
			className={cn(
				'relative overflow-hidden p-6 transition-all duration-300 group cursor-pointer',
				isHovered ? 'bg-gradient-to-br ' + accentColor : 'bg-transparent',
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-foreground/75 size-6 relative z-10 transition-colors duration-300 group-hover:text-amber-300" strokeWidth={1} aria-hidden />
			<h3 className="mt-10 text-base md:text-lg font-bold text-white relative z-10 transition-colors duration-300 group-hover:text-amber-100">{feature.title}</h3>
			<p className="text-gray-300 relative z-10 mt-2 text-sm font-medium transition-colors duration-300 group-hover:text-amber-50">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7,
		Math.floor(Math.random() * 6) + 1,
	]);
}

export { GridPattern };
