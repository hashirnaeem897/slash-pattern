import { WebGLRenderer } from 'three';
import configs from './configuration';

const { width, height } = configs.sizes;

const renderer = new WebGLRenderer({
  canvas: document.querySelector('canvas'),
});

renderer.setSize(width, height);
renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, configs.maxPixelRatio)
);

function updateRenderer(width, height) {
  renderer.setSize(width, height);
  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, configs.maxPixelRatio)
  );
}

function handleFullScreen() {
  if (!document.fullscreenElement)
    return renderer.domElement.requestFullscreen();

  document.exitFullscreen();
}

export default renderer;
export { updateRenderer, handleFullScreen };
