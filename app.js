/// <reference path="./p5.global-mode.d.ts"/>

let quadtree;
let rectangle;

function setup() {
    
    createCanvas(1000, 1000);
    rectMode(CENTER);
    quadtree = new Quadtree(2, new Rectangle(new Point(width / 2, height / 2), width, height));    
    
}

function draw() {
    let point = new Point(mouseX, mouseY);
    quadtree.insert(point);
    point.show();
}