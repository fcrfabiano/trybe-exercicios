const rectangleArea = (width, height) => width * height;

//const rectangles = [[1, 2], [3, 5], [6, 9]];
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle)
  console.log(rectangle[0] * rectangle[1]);
  //   const [a, b] = rectangle;
  // console.log(rectangleArea(a, b));
});