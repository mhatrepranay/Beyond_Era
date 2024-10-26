import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './landing.css'; // Your CSS file if needed
import modelUrl from '../models/ellora_caves__india.glb'; // Correct path to your model

// Component to load the GLB model
const Model = ({ url }) => {
    const { scene } = useGLTF(url); // Load the GLB model
    return <primitive object={scene} />;
};

// Main ModelViewer component
const ModelViewer = () => {
    return (
        <div>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Hello!</h1>
            <Canvas style={{ height: '1100px', width: '1500px' }}>
                <Suspense fallback={null}>
                    <Model url={modelUrl} /> {/* Use the imported model URL */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ModelViewer;
