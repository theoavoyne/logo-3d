import { Mesh, MeshPhongMaterial, SphereGeometry } from 'three';

const heightSegments = 24;
const radius = 20;
const widthSegments = 24;

export default () => {
  const geometry = new SphereGeometry(radius, widthSegments, heightSegments);
  const material = new MeshPhongMaterial({ color: 0x758c69, flatShading: true });

  return new Mesh(geometry, material);
};
