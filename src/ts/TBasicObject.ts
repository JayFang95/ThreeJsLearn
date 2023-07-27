import { BoxGeometry, ConeGeometry, CylinderGeometry, Line, LineBasicMaterial, Mesh, MeshStandardMaterial, Object3D, SphereGeometry } from "three";

export const basicObjectList: Object3D[] = [];

const material = new MeshStandardMaterial({color: 'rgb(0, 255, 255)'});
const materialLine = new LineBasicMaterial({color: 'rgb(0, 255, 255)'});
const box = new Mesh(
    new BoxGeometry(50, 50, 50),
    material,
);
box.position.x = -50;
box.position.y = 25;

const sphere = new Mesh(
    new SphereGeometry(25, 32, 32),
    material,
);
sphere.position.x = 50;
sphere.position.y = 25;

const cylinder = new Mesh(
    new CylinderGeometry(25, 25, 50, 32, 32),
    material,
)
cylinder.position.z = 50;
cylinder.position.y = 25;

const cone = new Line(
    new ConeGeometry(25, 50, 32, 32),
    materialLine,
);
cone.position.z = -50;
cone.position.y = 25;

basicObjectList.push(box, sphere, cylinder, cone);