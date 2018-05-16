// Calculate the area of rectangle, right angled triangle and circle.

function calculateAreas(l, w, b, p, r){
    let areaOfRectangle = (l * w);
    console.log(`Area of Rectangle: ${areaOfRectangle}`);
    let areaOfTriangle = (b * p) / 2;
    console.log(`Area of Triangle: ${areaOfTriangle}`);
    let areaOfCircle = Math.round(Math.PI * (r * r));
    console.log(`Area of Circle: ${areaOfCircle}`);    
}
calculateAreas(32, 32, 54, 12, 52);