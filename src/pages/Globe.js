// Globe.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Globe = () => {
    const mountRef = useRef(null);
    const globeRef = useRef(null);
    let mouseX = 0;
    let mouseY = 0;

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const globe = new THREE.Mesh(geometry, material);
        globeRef.current = globe;
        scene.add(globe);

        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const { clientWidth, clientHeight } = mount;
            renderer.setSize(clientWidth, clientHeight);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        const handleMouseRotate = () => {
            if (globeRef.current) {
                globeRef.current.rotation.y += mouseX * 0.005;
                globeRef.current.rotation.x += mouseY * 0.005;
            }
        };

        window.addEventListener('mousemove', handleMouseRotate);

        return () => {
            window.removeEventListener('mousemove', handleMouseRotate);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%',zIndex:'2' }} />;
};

export default Globe;
