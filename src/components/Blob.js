// src/components/Blob.js
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
uniform float u_time;
varying vec2 vUv;
void main() {
    vUv = uv;
    float distortion = sin(vUv.y * 10.0 + u_time) * 0.2;
    vec3 newPosition = position + normal * distortion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const fragmentShader = `
uniform vec3 u_color;
varying vec2 vUv;
void main() {
    vec3 color = u_color * (0.2 + 0.8 * vUv.y);
    gl_FragColor = vec4(color, 1.0);
}
`;

const Blob = () => {
    const mesh = useRef();
    const uniforms = useMemo(() => ({
        u_time: { value: 0 },
        u_color: { value: new THREE.Color(0.5, 0.2, 0.8) } // Set the initial color here
    }), []);

    useFrame(({ clock }) => {
        if (mesh.current) {
            mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
            <icosahedronGeometry args={[2, 20]} />
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
        </mesh>
    );
};

const BlobCanvas = () => (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', zIndex: -1 }}>
        <Blob />
    </Canvas>
);

export default BlobCanvas;
