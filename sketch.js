
//Task 2 Number Month
function setup() {
let data = prompt("Please enter a number between 1 and 12 which is equal to a season in the year:");
data = Number(data);

if(data <0 ||  data > 12){
  console.log("That is not a valid answer")
}else if(data == 1 || data == 2 || data == 12){
  console.log("Your Season is Winter:");
}else if(data == 3 || data == 4 || data == 5){
  console.log("Your Season is Spring:");
}else if(data == 6 || data == 7 || data == 8){
  console.log("Your Season is Summer:");
}else if(data == 9 || data == 10 || data == 11){
  console.log("Your Season is Autumn:");
}

createCanvas(400, 400);

jndjhfhjshosdfoji
}

function draw() {
  background(220);
}
