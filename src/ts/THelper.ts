import { AxesHelper, CameraHelper, GridHelper, Object3D, PointLightHelper, SpotLightHelper } from "three";
import { pointLight, spotLight } from "./TLight";

export const helperList: Object3D[] = [];

const axesHelper = new AxesHelper(150);
const gridHelper = new GridHelper(1000, 10);

const pointLightHelper = new PointLightHelper(pointLight, 10);
const spotLightHelper = new SpotLightHelper(spotLight);

const cameraHelper = new CameraHelper(pointLight.shadow.camera);

helperList.push(axesHelper, pointLightHelper, spotLightHelper, );