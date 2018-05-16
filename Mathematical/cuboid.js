function cuboid(length , width, height){
    let volume = length * width * height;
    let surfaceArea = 2 * ((length * width) + (width * height) + (length * height));
    console.log(volume);
    console.log(surfaceArea);
}
cuboid(1,2,3);