import { AxesHelper, GridHelper, Object3D } from "three";

export const helperList: Object3D[] = [];

const axesHelper = new AxesHelper(150);
const gridHelper = new GridHelper(1000, 10);

helperList.push(axesHelper, gridHelper);