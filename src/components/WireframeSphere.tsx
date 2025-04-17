"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useTheme } from "next-themes";
function RotatingSphere() {
    const ref = useRef<Mesh>(null);
    const { theme } = useTheme();

    const color = theme === "dark" ? "#dc2626" : "#ef4444";

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5;
            ref.current.rotation.x += delta * 0.2;
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1.6, 16, 12]} />
            <meshBasicMaterial wireframe color={color} />
        </mesh>
    );
}

export default function SphereCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <RotatingSphere />
        </Canvas>
    );
}
