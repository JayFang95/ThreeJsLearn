import { AmbientLight, AxesHelper, GridHelper, Object3D, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

export class TEngine{

    private dom: HTMLElement;
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;

    constructor(dom: HTMLElement){
        this.dom = dom;
        const width = this.dom.offsetWidth;
        const height = this.dom.offsetHeight;

        this.renderer = new WebGLRenderer({
            antialias: true, // 设置抗锯齿
        });
        this.renderer.shadowMap.enabled = true;
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(30, width/height, 1, 3000);

        this.camera.position.set(800, 800, 800);
        this.camera.lookAt(0, 0, 0);
        this.camera.up = new Vector3(0, 1, 0);

        dom.appendChild(this.renderer.domElement);
        this.renderer.setSize(width, height, true);

        this.renderer.setClearColor('rgb(125, 125, 125)', 0.5);
        this.renderer.clearColor();


        // 设置相机控件：轨道控制器
        const oribitControls = new OrbitControls(this.camera, this.renderer.domElement);
        // oribitControls.autoRotate = true;

        const looper = () => {
            oribitControls.update();
            this.renderer.render(this.scene, this.camera);

            requestAnimationFrame(looper);
        }
        looper();
        
    }

    /**
     * 向场景中添加3d对象
     * @param objects objects
     */
    add(...objects: Object3D[]){
        objects.forEach(elem => this.scene.add(elem));
    }

}