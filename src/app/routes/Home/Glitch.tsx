import { useEffect } from "react";
import {
  TextureLoader,
  Color,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
  DirectionalLight,
  ShaderMaterial,
  MeshNormalMaterial,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const vertexShader = `
      varying vec2 vUv;
      void main() {
         vUv = uv;
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
     }
`;

const fragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float glitchIntensity;
    varying vec2 vUv;
  
    void main() {
      vec2 uv = vUv;
      vec4 baseState = texture2D(tDiffuse, uv);
  
      if (glitchIntensity > 0.0) {
          float segment = floor(uv.y * 12.0); 
          float randomValue = fract(sin(segment * 12345.6789 + glitchIntensity) * 43758.5453); 
          vec2 offset = vec2(randomValue * 0.03, 0.0) * glitchIntensity;
  
          vec4 redGlitch = texture2D(tDiffuse, uv + offset);
          vec4 greenGlitch = texture2D(tDiffuse, uv - offset);
          vec4 blueGlitch = texture2D(tDiffuse, uv);
  
          if (mod(segment, 3.0) == 0.0) {
              gl_FragColor = vec4(redGlitch.r, greenGlitch.g, baseState.b, 1.0);
          } else if (mod(segment, 3.0) == 1.0) {
              gl_FragColor = vec4(baseState.r, greenGlitch.g, blueGlitch.b, 1.0);
          } else {
              gl_FragColor = vec4(redGlitch.r, baseState.g, blueGlitch.b, 1.0);
          }
      } else {
          gl_FragColor = baseState; 
      }
  }
  
`;

function Glitch() {
  function initThree(container: Element) {
    const scene = new Scene();
    scene.background = new Color("skyblue");

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 1;
    const far = 100;

    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 10);

    const texture = new TextureLoader().load(
      "src/assets/images/background/CDI_logo.png"
    );
    const geometry = new PlaneGeometry(15, 6.3, 16, 16);

    const shaderUniforms = {
      tDiffuse: { value: texture },
      glitchIntensity: { value: 0.0 },
    };

    const shader = new ShaderMaterial({
      uniforms: shaderUniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new Mesh(geometry, shader);
    scene.add(mesh);

    const loader = new FontLoader();
    loader.load("src/app/assets/fonts/main.ttf", (font) => {
      const text = new TextGeometry("text", {
        font,
        size: 50,
        depth: 5,
        curveSegments: 12,
      });
      text.center();
      const material = new MeshNormalMaterial();
      const textMesh = new Mesh(text, material);
      textMesh.position.z = 8;
      scene.add(textMesh);
    });

    const renderer = new WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.append(renderer.domElement);

    const light = new DirectionalLight("white", 0.5);
    light.position.set(0, 0, 1);
    scene.add(light);

    let isRunning = false;
    setInterval(() => {
      isRunning = !isRunning;
    }, 1000);

    renderer.setAnimationLoop(() => {
      if (isRunning) {
        const offset = Math.floor(Math.random() * 1000);

        shader.uniforms.glitchIntensity.value = offset / 1000;
      } else {
        shader.uniforms.glitchIntensity.value = 0;
      }
      renderer.render(scene, camera);
    });
  }

  useEffect(() => {
    const container = document.querySelector("#scene-container");
    if (!container) return;

    initThree(container);
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden" id="scene-container"></div>
  );
}

export default Glitch;
