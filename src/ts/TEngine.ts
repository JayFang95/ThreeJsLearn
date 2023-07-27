import { AmbientLight, AmbientLight, AxesHelper, BoxGeometry, GridHelper, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
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

        const ambientLight = new AmbientLight('rgb(255, 255, 255)', 1);
        this.scene.add(ambientLight);

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

        // 设置性能监视器
        const stats = Stats(); 
        const statsDom = stats.domElement;
        statsDom.style.position = 'fixed';
        statsDom.style.top = '10px';
        statsDom.style.left = '10px';

        dom.appendChild(statsDom);

        // 设置相机控件：轨道控制器
        const oribitControls = new OrbitControls(this.camera, this.renderer.domElement);
        // oribitControls.autoRotate = true;

        const looper = () => {
            mesh.rotateY(0.001);
            oribitControls.update();
            this.renderer.render(this.scene, this.camera);

            stats.update();

            requestAnimationFrame(looper);
        }
        looper();

        
    }

}