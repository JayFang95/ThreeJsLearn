import { BoxGeometry, Mesh, MeshStandardMaterial, Object3D, PlaneGeometry } from "three";

export const basicObjectList: Object3D[] = [];

// 设置地面
const floor = new Mesh(
    new BoxGeometry(1000, 10, 1000),
    new MeshStandardMaterial({
        color: 'rgb(150, 150, 150)',
        metalness: 1,
        roughness: 0.5
    })
);
floor.position.y = -5;
floor.receiveShadow = true;

// 设置墙面
const wall = new Mesh(
    new PlaneGeometry(1000, 300),
    new MeshStandardMaterial({
        color: 'rgb(50, 50, 50)'
    })
);
wall.translateY(150);
wall.translateZ(-500);

// 放置物体
const box = new Mesh(
    new BoxGeometry(50, 50, 50),
    new MeshStandardMaterial({
        color: 'rgb(255, 255, 100)',
        metalness: 1,
        roughness: 0.5
    })
);
box.translateY(25);
box.castShadow = true;

basicObjectList.push(floor, wall, box);