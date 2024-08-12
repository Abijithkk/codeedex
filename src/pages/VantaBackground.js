import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const VantaBirds = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const initializeVanta = () => {
      if (vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = BIRDS({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
          });
        } catch (error) {
          console.error("Vanta initialization error:", error);
        }
      }
    };

    // Check if THREE is available and then initialize Vanta
    if (THREE) {
      initializeVanta();
    }

    // Cleanup function to destroy Vanta effect
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="vanta-background" style={{ width: '100%', height: '100vh' }} />;
};

export default VantaBirds;
