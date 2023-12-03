"use client";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  loading: () => <></>,
  ssr: false,
});

const preload = (p5: p5Types) => {
  // 画像などのロードを行う
};

let x = 100;
let y = 100;

const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(400, 400).parent(canvasParentRef);
  // brush.load(p5, true);
};

const draw = (p5: p5Types) => {
  p5.background(200);
  p5.ellipse(200, 200, 50, 50);
  // brush.fill("red", 75);
  // brush.rect(x, y, 50, 50);
};

export const P5brush = () => {
  return (
    <Sketch setup={setup} draw={draw} />

    // <P5BrushInstance
    //   sketch={(p5) => {
    //     const palette = [
    //       "#2c695a",
    //       "#4ad6af",
    //       "#7facc6",
    //       "#4e93cc",
    //       "#f6684f",
    //       "#ffd300",
    //     ];

    //     p5.setup = () => {
    //       p5.background("black");
    //       p5.createCanvas(1500, 1500, "webgl");
    //       p5.angleMode("degrees");
    //       // p5.brush.scaleBrushes(1.5);
    //       // p5.brush.field("seabed");
    //     };

    //     p5.draw = () => {
    //       const { width, height } = p5;
    //       const random = p5.random.bind(p5);

    //       p5.frameRate(30);
    //       p5.translate(-width / 2, -height / 2);

    //       // brush.box() returns an array with available brushes
    //       const available_brushes = p5.brush.box();

    //       p5.brush.set(random(available_brushes), random(palette), 1);

    //       // Draw a random flowLine (x, y, length, direction)
    //       p5.brush.flowLine(
    //         random(width),
    //         random(height),
    //         random(300, 800),
    //         random(0, 360)
    //       );

    //       // Set the stroke to a random brush, color, and weight = 1
    //       p5.brush.set(random(available_brushes), random(palette), 1);

    //       // Draw a random flowLine (x, y, length, direction)
    //       p5.brush.flowLine(
    //         random(width),
    //         random(height),
    //         random(300, 800),
    //         random(0, 360)
    //       );
    //     };
    //   }}
    // />
  );
};
