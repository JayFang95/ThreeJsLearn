import { WebGLRenderer } from "three";

export class TEngine{

    private dom: HTMLElement;
    private renderer: WebGLRenderer;

    constructor(dom: HTMLElement){
        this.dom = dom;
        this.renderer = new WebGLRenderer();
        const width = this.dom.offsetWidth;
        const height = this.dom.offsetHeight;
        this.renderer.setSize(width, height);
        this.dom?.appendChild(this.renderer.domElement);
    }

}