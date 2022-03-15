const rectangleArea = (width, height) => width * height;

const rectangles = [[1, 2], [3, 5], [6, 9]];

rectangles.forEach((rectangle) => {
    const [a, b] = rectangle;
  console.log(rectangleArea(a, b));
});