let streak1;
let streak2;
let streak3;
let streak4;
let streak5;



function setup(){
    createCanvas(1000,500);

    streak1 = new SkyStreak();
    streak2 = new SkyStreak();
    streak3 = new SkyStreak();
    streak4 = new SkyStreak();
    streak5 = new SkyStreak();
    
}

function draw(){
    background('#01749F'); //"sky" color

    streak1.display(100); //5 curves in the background
    streak1.update();

    push(); //pushing and popping matrixes with small rotation and position changes to make each curve a tiny bit different
    rotate(radians(-2));
    translate(-10,0);
    streak2.display(200);
    streak2.update();
    pop();

    push();
    rotate(radians(-4));
    translate(-20,0);
    streak3.display(300);
    streak3.update();
    pop();

    push();
    rotate(radians(-2));
    translate(-10,0);
    streak4.display(400);
    streak4.update();
    pop();

    streak5.display(500);
    streak5.update();

}

