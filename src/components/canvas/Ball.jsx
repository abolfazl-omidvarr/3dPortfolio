import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import {
	Float,
	Decal,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const decal = useTexture(props.imgUrl);
	return (
		<Float
			speed={5}
			rotationIntensity={2}
			floatIntensity={3}
			// floatingRange={[1, 1]}
		>
			<ambientLight intensity={0.2} />
			<directionalLight position={[0, 0, 1]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#625e75"
					polygonOffset
					polygonOffsetFactor={-5}
				/>
				<Decal
					map={decal.icon}
					position={[0, 0, 1]}
					flatShading
					rotation={[2 * Math.PI, 0, 6.25]}
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = (icon) => {
	return (
		<Canvas>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					maxAzimuthAngle={Math.PI / 7}
					minAzimuthAngle={-Math.PI / 7}
					minPolarAngle={Math.PI / 2}
					enableZoom={false}
				/>
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
