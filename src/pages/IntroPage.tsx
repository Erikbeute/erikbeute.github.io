import { useEffect, useRef } from "react";
import * as THREE from 'three';

function IntroPage() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const mount = mountRef.current;
    if (mount) {

      // ensure the mount container is positioned so overlay can sit above the canvas
      mount.style.position = 'relative';
      mount.appendChild(renderer.domElement);

      // position the canvas absolutely and give it a lower z-index than the overlay
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      renderer.domElement.style.zIndex = '0';
    }

    // ---- Cube ----
    const boxGeometry = new THREE.BoxGeometry();
    const edgesOnly = new THREE.EdgesGeometry(boxGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgedCube = new THREE.LineSegments(edgesOnly, lineMaterial);
    scene.add(edgedCube);

    // update window (re-)size
    window.addEventListener('resize', () => {

      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    camera.position.z = 2;
    scene.add(camera);

    // ---- Animation loop ----
    function animate() {
      requestAnimationFrame(animate);

      // 1. Update (Rotate)
      edgedCube.rotation.x += 0.005;
      edgedCube.rotation.y += 0.005;

      // 2. Render de nieuwe staat
      renderer.render(scene, camera);
    }
    animate();

    /**
     * Renderer
     */
    renderer.setSize(sizes.width, sizes.height)


    // ---- Cleanup on unmount ----
    return () => {
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '100vh',
          fontSize: '30px',
          pointerEvents: 'none',
        }}
      >
        more soon
      </div>
    </div>
  );
}


export default IntroPage;