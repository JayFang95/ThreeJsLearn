import { AmbientLight, AxesHelper, BoxGeometry, GridHelper, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export class TEngine{

    private dom: HTMLElement;
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;

    constructor(dom: HTMLElement){
        this.dom = dom;
        const width = this.dom.offsetWidth;
        const height = this.dom.offsetHeight;

        this.renderer = new WebGLRenderer();
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(30, width/height, 1, 1000);

        this.camera.position.set(200, 200, 200);
        this.camera.lookAt(0, 0, 0);
        this.camera.up = new Vector3(0, 1, 0);

        const axesHelper = new AxesHelper(100);
        this.scene.add(axesHelper);
        const gridHelper = new GridHelper(1000, 20, 'rgb(100, 100, 100)', 'rgb(150, 150, 150)');
        gridHelper.position.set(0, -0.1, 0)
        this.scene.add(gridHelper);

        // 渲染基本图形
        const box = new BoxGeometry(50 ,50 ,50);
        const material = new MeshStandardMaterial({
            color: 'rgb(255, 255, 0)'
        });
        const mesh = new Mesh(box, material);

        this.scene.add(mesh);

        dom.appendChild(this.renderer.domElement);
        this.renderer.setSize(width, height, true);

        this.renderer.setClearColor('rgb(125, 125, 125)', 0.5);
        this.renderer.clearColor();

        // 设置相机控件
        const oribitControls = new OrbitControls(this.camera, this.renderer.domElement);
        // oribitControls.autoRotate = true;

        const looper = () => {
            requestAnimationFrame(looper);
            mesh.rotateY(0.001);
            oribitControls.update();
            this.renderer.render(this.scene, this.camera);
        }
        looper();

        
    }

}