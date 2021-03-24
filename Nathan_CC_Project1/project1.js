//BACKGROUND CURVES
let streak1;
let streak2;
let streak3;
let streak4;
let streak5;
let streak6;

//CLOUDS-BACKGROUND
let backgroundcloud1;
let backgroundcloud2;
let backgroundcloud3;
let backgroundcloud4;
let backgroundcloud5;
let backgroundcloud6;
let backgroundcloud7;
let backgroundcloud8;
let backgroundcloud9;
let backgroundcloud10;
let backgroundcloud11;
let backgroundcloud12;
let backgroundcloud13;
let backgroundcloud14;
let backgroundcloud15;
let backgroundcloud16;
let backgroundcloud17;
let backgroundcloud18;
let backgroundcloud19;
let backgroundcloud20;
let backgroundcloud21;
let backgroundcloud22;
let backgroundcloud23;
let backgroundcloud24;
let backgroundcloud25;
let backgroundcloud26;
let backgroundcloud27;
let backgroundcloud28;
let backgroundcloud29;
let backgroundcloud30;
let backgroundcloud31;
let backgroundcloud32;
let backgroundcloud33;
let backgroundcloud34;
let backgroundcloud35;
let backgroundcloud36;
let backgroundcloud37;
let backgroundcloud38;
let backgroundcloud39;
let backgroundcloud40;
let backgroundcloud41;
let backgroundcloud42;
let backgroundcloud43;
let backgroundcloud44;
let backgroundcloud45;
let backgroundcloud46;
let backgroundcloud47;
let backgroundcloud48;
let backgroundcloud49;
let backgroundcloud50;
let backgroundcloud51;
let backgroundcloud52;
let backgroundcloud53;
let backgroundcloud54;


let backgroundcluster1;
let backgroundcluster2;
let backgroundcluster3;
let backgroundcluster4;
let backgroundcluster5;


//CLOUDS - LAYER 1
let layer1cloud1;
let layer1cloud2;
let layer1cloud3;
let layer1cloud4;
let layer1cloud5;
let layer1cloud6;
let layer1cloud7;
let layer1cloud8;
let layer1cloud9;
let layer1cloud10;
let layer1cloud11;

function setup(){
    createCanvas(1000,600);

    //BACKGROUND CURVES
    streak1 = new SkyStreak();
    streak2 = new SkyStreak();
    streak3 = new SkyStreak();
    streak4 = new SkyStreak();
    streak5 = new SkyStreak();
    streak6 = new SkyStreak();

    //CLOUDS - BACKGROUND
    backgroundcloud1 = new Cloud();
    backgroundcloud2 = new Cloud();
    backgroundcloud3 = new Cloud();
    backgroundcloud4 = new Cloud();
    backgroundcloud5 = new Cloud();
    backgroundcloud6 = new Cloud();
    backgroundcloud7 = new Cloud();
    backgroundcloud8 = new Cloud();
    backgroundcloud9 = new Cloud();
    backgroundcloud10 = new Cloud();
    backgroundcloud11 = new Cloud();
    backgroundcloud12 = new Cloud();
    backgroundcloud13 = new Cloud();
    backgroundcloud14 = new Cloud();
    backgroundcloud15 = new Cloud();
    backgroundcloud16 = new Cloud();
    backgroundcloud17 = new Cloud();
    backgroundcloud18 = new Cloud();
    backgroundcloud19 = new Cloud();
    backgroundcloud20 = new Cloud();
    backgroundcloud21 = new Cloud();
    backgroundcloud22 = new Cloud();
    backgroundcloud23 = new Cloud();
    backgroundcloud24 = new Cloud();
    backgroundcloud25 = new Cloud();
    backgroundcloud26 = new Cloud();
    backgroundcloud27 = new Cloud();
    backgroundcloud28 = new Cloud();
    backgroundcloud29 = new Cloud();
    backgroundcloud30 = new Cloud();
    backgroundcloud31 = new Cloud();
    backgroundcloud32 = new Cloud();
    backgroundcloud33 = new Cloud();
    backgroundcloud34 = new Cloud();
    backgroundcloud35 = new Cloud();
    backgroundcloud36 = new Cloud();
    backgroundcloud37 = new Cloud();
    backgroundcloud38 = new Cloud();
    backgroundcloud39 = new Cloud();
    backgroundcloud40 = new Cloud();
    backgroundcloud41 = new Cloud();
    backgroundcloud42 = new Cloud();
    backgroundcloud43 = new Cloud();
    backgroundcloud44 = new Cloud();
    backgroundcloud45 = new Cloud();
    backgroundcloud46 = new Cloud();
    backgroundcloud47 = new Cloud();
    backgroundcloud48 = new Cloud();
    backgroundcloud49 = new Cloud();
    backgroundcloud50 = new Cloud();
    backgroundcloud51 = new Cloud();
    backgroundcloud52 = new Cloud();
    backgroundcloud53 = new Cloud();
    backgroundcloud54 = new Cloud();

    backgroundcluster1 = new Cluster();
    backgroundcluster2 = new Cluster();
    backgroundcluster3 = new Cluster();
    backgroundcluster4 = new Cluster();
    backgroundcluster5 = new Cluster();

    //CLOUDS -LAYER 1
    layer1cloud1 = new Cloud();
    layer1cloud2 = new Cloud();
    layer1cloud3 = new Cloud();
    layer1cloud4 = new Cloud();
    layer1cloud5 = new Cloud();
    layer1cloud6 = new Cloud();
    layer1cloud7 = new Cloud();
    layer1cloud8 = new Cloud();
    layer1cloud9 = new Cloud();
    layer1cloud10 = new Cloud();
    layer1cloud11 = new Cloud();

}

function draw(){
    background('#01749F'); //"sky" color

    //BACKGROUND CURVES
    streak1.display(100); //6 curves in the background
    streak1.update();

    push(); //pushing and popping matrixes with small rotation and position changes to make each curve a tiny bit different
    rotate(radians(-2));
    translate(-10,0);
    streak2.display(200);
    streak2.update();
    pop();

    push();
    rotate(radians(-3));
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

    streak6.display(20);
    streak6.update();
    

    //BACKGROUND CLOUDS
    //xPos,size,cloudheight, cloudbottom, cloudcolor,cloudspacing (note for self)
    backgroundcloud1.display(990,20,20,485,255,5);
    backgroundcloud1.update();

    backgroundcloud2.display(995,20,22,485,255,2);
    backgroundcloud2.update();


    backgroundcloud3.display(960,80,40,485,255,20);
    backgroundcloud3.update();


    backgroundcloud4.display(930,30,30,485,255,10);
    backgroundcloud4.update();


    backgroundcloud7.display(900,30,30,485,220,10);
    backgroundcloud7.update();


    backgroundcloud5.display(915,30,30,485,255,10);
    backgroundcloud5.update();


    backgroundcloud8.display(870,40,36,485,200,15);
    backgroundcloud8.update();


    backgroundcloud6.display(890,28,36,485,255,4);
    backgroundcloud6.update();


    backgroundcloud9.display(865,30,50,485,255,5);
    backgroundcloud9.update();


    backgroundcloud10.display(840,35,50,485,255,10);
    backgroundcloud10.update();


    backgroundcloud12.display(808,20,70,485,200,5);
    backgroundcloud12.update();


    backgroundcloud11.display(820,30,50,485,255,10);
    backgroundcloud11.update();


    backgroundcloud13.display(805,20,75,485,255,5);
    backgroundcloud13.update();


    backgroundcloud14.display(790,20,90,485,255,5);
    backgroundcloud14.update();

    backgroundcloud15.display(770,30,100,485,255,10);
    backgroundcloud15.update();


    backgroundcloud16.display(760,20,105,485,255,5);
    backgroundcloud16.update();


    backgroundcloud17.display(745,20,105,485,255,5);
    backgroundcloud17.update();


    backgroundcloud18.display(720,50,120,485,255,10);
    backgroundcloud18.update();


    backgroundcloud21.display(680,50,130,485,200,10);
    backgroundcloud21.update();


    backgroundcloud19.display(700,20,120,485,255,5);
    backgroundcloud19.update();


    backgroundcloud20.display(690,20,122,485,255,2);
    backgroundcloud20.update();

  
    backgroundcloud22.display(670,40,130,485,255,10);
    backgroundcloud22.update();

    
    backgroundcloud23.display(650,30,140,485,255,10);
    backgroundcloud23.update();


    backgroundcloud24.display(640,20,138,485,255,2);
    backgroundcloud24.update();


    backgroundcloud25.display(630,20,135,485,255,5);
    backgroundcloud25.update();


    backgroundcloud26.display(610,40,135,485,255,10);
    backgroundcloud26.update();


    backgroundcloud27.display(595,20,124,485,255,2);
    backgroundcloud27.update();


    backgroundcloud29.display(588,15,128,485,200,2);
    backgroundcloud29.update();


    backgroundcloud28.display(588,18,132,485,255,2);
    backgroundcloud28.update();


    backgroundcloud30.display(569,28,129,485,255,3);
    backgroundcloud30.update();


    backgroundcloud31.display(560,20,125,485,255,5);
    backgroundcloud31.update();


    backgroundcloud32.display(550,20,120,485,255,4);
    backgroundcloud32.update();

    
    backgroundcloud33.display(540,20,118,485,255,2);
    backgroundcloud33.update();

    backgroundcloud34.display(530,25,125,485,255,5);
    backgroundcloud34.update();


    backgroundcloud35.display(515,30,140,485,255,5);
    backgroundcloud35.update();


    backgroundcloud36.display(500,20,145,485,255,2); //halfway!
    backgroundcloud36.update();


    backgroundcloud37.display(490,20,150,485,255,5);
    backgroundcloud37.update();


    backgroundcloud38.display(470,30,155,485,255,10);
    backgroundcloud38.update();


    backgroundcloud39.display(460,20,170,485,255,5);
    backgroundcloud39.update();

    
    backgroundcloud40.display(442,20,160,485,255,2);
    backgroundcloud40.update();


    backgroundcloud41.display(430,20,165,485,255,5);
    backgroundcloud41.update();


    //xPos,size,cloudheight,cloudbottom,cloudspacing (note for self)

    backgroundcluster1.display(380,20,170,485,5);
    backgroundcluster1.update();

    backgroundcluster2.display(320,20,200,485,5);
    backgroundcluster2.update();


    backgroundcluster3.display(250,40,250,485,5);
    backgroundcluster3.update();


    backgroundcluster4.display(200,50,300,485,10);
    backgroundcluster4.update();


    backgroundcluster5.display(180,30,330,485,5);
    backgroundcluster5.update();




    backgroundcloud42.display(160,20,340,485,255,4);
    backgroundcloud42.update();

    backgroundcloud43.display(150,30,350,485,255,5);
    backgroundcloud43.update();

    backgroundcloud44.display(140,20,360,485,255,2);
    backgroundcloud44.update();

    backgroundcloud45.display(120,30,370,485,255,2);
    backgroundcloud45.update();

    backgroundcloud46.display(110,20,395,485,255,2);
    backgroundcloud46.update();

    backgroundcloud47.display(100,20,400,485,255,2);
    backgroundcloud47.update();

    backgroundcloud48.display(80,30,410,485,255,2);
    backgroundcloud48.update();

    backgroundcloud49.display(70,20,400,485,255,2);
    backgroundcloud49.update();

    backgroundcloud50.display(50,30,420,485,255,5);
    backgroundcloud50.update();

    backgroundcloud51.display(40,20,430,485,255,5);
    backgroundcloud51.update();

    backgroundcloud52.display(30,30,450,485,255,2);
    backgroundcloud52.update();

    backgroundcloud53.display(10,30,455,485,255,5);
    backgroundcloud53.update();
    
    backgroundcloud54.display(-5,30,455,485,255,5);
    backgroundcloud54.update();


    //LAYER 1 CLOUDS
    layer1cloud1.display(380,30,200,485,255,5);
    layer1cloud1.update();

    layer1cloud2.display(400,30,195,485,255,5);
    layer1cloud2.update();

    layer1cloud3.display(415,20,195,485,255,5);
    layer1cloud3.update();

    layer1cloud4.display(325,30,225,485,255,5);
    layer1cloud4.update();

    layer1cloud5.display(340,30,220,485,255,5);
    layer1cloud5.update();

    layer1cloud6.display(350,35,215,485,255,5);
    layer1cloud6.update();

    layer1cloud7.display(250,50,280,485,255,10);
    layer1cloud7.update();

    layer1cloud8.display(280,50,270,485,255,10);
    layer1cloud8.update();

    layer1cloud9.display(300,20,260,485,255,5);
    layer1cloud9.update();

    layer1cloud10.display(180,60,360,485,255,10);
    layer1cloud10.update();

    layer1cloud11.display(205,50,340,485,255,5);
    layer1cloud11.update();

    fill(150);
    rect(0,487.5,width,200);
}

