//Create variables here
var db;
var dog,dogImage,dogImage1,food,foodStock,foodRef;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("happydog.png");
  //foodImage = loadImage("images/Bone.png");
}

function setup() {
  createCanvas(500, 500);

  //Sprites

 // food = createSprite(250,400,50,50);
//  food.addImage(foodImage);
  //food.scale = 0.3;


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  //Firebase
  db = firebase.database();

  //Reference for food
  foodRef = db.ref("Food");
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  
  //add styles here
  textSize(32);
  fill("yellow");
  text("food stock available : "+foodStock,50,300);
  textSize(16);
  text("press 'Up Arrow' key to feed the dog",50,70)
  decreaseFood();
  if(foodStock===0){
    foodStock = 20;
  }
}

function read(data){
  foodStock = data.val();
}

function decreaseFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = db.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  //food.x = 350;
  //food.y = 200;
  //food.scale = 0.1;

  }
  if(keyWentUp(UP_ARROW)){
    foodStock = foodStock;
    //dog.addImage(dogImage1);
   // food.x = 250;
    //food.y = 400;
    //food.scale = 0.2;
  }
}