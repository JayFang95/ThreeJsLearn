import { AmbientLight, Object3D, PointLight, SpotLight } from "three";

export const lightList: Object3D[] = [];

// 环境光
const ambientLight = new AmbientLight('rgb(255, 255, 255)', 0.3);

// 点光源
export const pointLight = new PointLight('rgb(255, 255, 255)', 1);
pointLight.position.set(0, 25, 50);
pointLight.castShadow = true;

//聚光灯
export const spotLight = new SpotLight('rgb(255, 255, 255)', 1, 500, Math.PI / 6);
spotLight.position.set(100, 200, -50),
spotLight.castShadow = true;


lightList.push(ambientLight, spotLight, pointLight);