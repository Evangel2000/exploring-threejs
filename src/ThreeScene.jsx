import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ThreeScene.module.css"; // Assuming you have CSS for styling

function ThreeScene() {
  const containerRef = useRef(null); // To reference the div container

  useEffect(() => {
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha for transparency

    // Set renderer size and attach to the container
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Create a simple cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.threeSceneContainer}>
      {/* The canvas will be appended to this div */}
    </div>
  );
}

export default ThreeScene;
