/// <reference path="./p5.global-mode.d.ts"/>
/// <reference path="./objects/quadtree.js"/>

let quadtree = new Quadtree(5);
let points = [];

function setup(){
    createCanvas($(document).width() / 2, $(document).height() / 2);
    for (let i = 0; i < 200; i++){
        points.push(new Point(random(0, width), random(0, height)));
    }
}

function draw(){
    
}