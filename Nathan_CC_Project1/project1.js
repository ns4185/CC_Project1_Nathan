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

//CLOUDS - LAYER 2
let layer2cloud1;
let layer2cloud2;
let layer2cloud3;
let layer2cloud4;
let layer2cloud5;
let layer2cloud6;
let layer2cloud7;
let layer2cloud8;
let layer2cloud9;
let layer2cloud10;
let layer2cloud11;
let layer2cloud12;
let layer2cloud13;
let layer2cloud14;
let layer2cloud15;
let layer2cloud16;
let layer2cloud17;
let layer2cloud18;
let layer2cloud19;
let layer2cloud20;

//CLOUDS - LAYER 3
let layer3cloud1;
let layer3cloud2;
let layer3cloud3;
let layer3cloud4;
let layer3cloud5;
let layer3cloud6;
let layer3cloud7;
let layer3cloud8;
let layer3cloud9;
let layer3cloud10;

//BIRDS
let bird1;
let bird2;
let bird3;
let bird4;
let bird5;

//BOATS
let boat1;
let boat2;
let boat3;
let boat4;

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

    //CLOUDS - LAYER 2
    layer2cloud1 = new randomCluster();
    layer2cloud2 = new randomCluster();
    layer2cloud3 = new randomCluster();
    layer2cloud4 = new randomCluster();
    layer2cloud5 = new randomCluster();
    layer2cloud6 = new randomCluster();
    layer2cloud7 = new randomCluster();
    layer2cloud8 = new randomCluster();
    layer2cloud9 = new randomCluster();
    layer2cloud10 = new randomCluster();
    layer2cloud11 = new randomCluster();
    layer2cloud12 = new randomCluster();
    layer2cloud13 = new randomCluster();
    layer2cloud14 = new randomCluster();
    layer2cloud15 = new randomCluster();
    layer2cloud16 = new randomCluster();
    layer2cloud17 = new randomCluster();
    layer2cloud18 = new randomCluster();
    layer2cloud19 = new randomCluster();
    layer2cloud20 = new randomCluster();

    //CLOUDS - LAYER 3
    layer3cloud1 = new Cloud();
    layer3cloud2 = new Cloud();
    layer3cloud3 = new Cloud();
    layer3cloud4 = new Cloud();
    layer3cloud5 = new Cloud();
    layer3cloud6 = new Cloud();
    layer3cloud7 = new Cloud();
    layer3cloud8 = new Cloud();
    layer3cloud9 = new Cloud();
    layer3cloud10 = new Cloud();
    layer3cloud11 = new Cloud();


    //BIRDS
    bird1 = new Bird();
    bird2 = new Bird();
    bird3 = new Bird();
    bird4 = new Bird();
    bird5 = new Bird();

    //BOATS
    boat1 = new Boat();
    boat2 = new Boat();
    boat3 = new Boat();
    boat4 = new Boat();
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

    //SKY GRADIENT
    fill(0,34,54,20);
    noStroke();
    rect(0,0,width,70);
    rect(0,0,width,65);
    rect(0,0,width,60);
    rect(0,0,width,55);
    rect(0,0,width,50);
    rect(0,0,width,45);
    rect(0,0,width,40);
    rect(0,0,width,35);
    rect(0,0,width,30);


    fill(255,255,255,10);
    noStroke();
    rect(0,300,width,200);
    rect(0,310,width,200);
    rect(0,320,width,200);
    rect(0,330,width,200);
    rect(0,340,width,200);
    rect(0,350,width,200);
    rect(0,360,width,200);
    rect(0,370,width,200);
    rect(0,380,width,200);
    rect(0,390,width,200);
    rect(0,400,width,200);
    

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


    //xPos,size,cloudheight, cloudbottom, cloudcolor,cloudspacing (note for self)

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


    //LAYER 2 CLOUDS
    //xPos,size,cloudheight,cloudbottom,cloudspacing (note for self)

    layer2cloud1.display(900,50,170,180,2);
    layer2cloud1.update();

    layer2cloud2.display(800,30,190,195,5);
    layer2cloud2.update();

    layer2cloud3.display(830,60,180,195,5);
    layer2cloud3.update();

    layer2cloud4.display(750,20,200,220,2);
    layer2cloud4.update();

    layer2cloud5.display(740,40,230,240,5);
    layer2cloud5.update();

    layer2cloud6.display(500,50,250,255,5);
    layer2cloud6.update();

    layer2cloud7.display(450,40,265,280,2);
    layer2cloud7.update();

    layer2cloud8.display(300,50,350,380,5);
    layer2cloud8.update();

    layer2cloud9.display(100,25,430,440,2);
    layer2cloud9.update();

    layer2cloud10.display(600,80,300,320,5);
    layer2cloud10.update();

    layer2cloud11.display(860,90,220,230,1);
    layer2cloud11.update();

    layer2cloud12.display(580,70,340,350,2);
    layer2cloud12.update();

    layer2cloud13.display(910,150,400,450,10);
    layer2cloud13.update();

    layer2cloud14.display(860,100,420,450,5);
    layer2cloud14.update();

    layer2cloud15.display(920,40,430,440,5);
    layer2cloud15.update();

    layer2cloud16.display(550,50,420,430,2);
    layer2cloud16.update();

    layer2cloud17.display(400,40,440,455,5);
    layer2cloud17.update();

    layer2cloud18.display(920,35,80,90,2);
    layer2cloud18.update();

    layer2cloud19.display(200,50,490,500,2);
    layer2cloud19.update();

    //LAYER 3 CLOUDS
    //xPos,size,cloudheight, cloudbottom, cloudcolor,cloudspacing (note for self)
    layer3cloud1.display(430,20,300,310,240,5);
    layer3cloud1.update();

    layer3cloud2.display(450,30,325,350,245,25);
    layer3cloud2.update();

    layer3cloud3.display(440,20,340,360,250,5);
    layer3cloud3.update();

    layer3cloud4.display(720,30,300,325,250,5);
    layer3cloud4.update();
   
    layer3cloud5.display(730,20,310,315,255,1);
    layer3cloud5.update();

    layer3cloud6.display(640,30,150,160,250,5);
    layer3cloud6.update();

    layer3cloud7.display(680,20,170,175,252,1);
    layer3cloud7.update();

    layer3cloud8.display(750,30,410,420,240,5);
    layer3cloud8.update();

    layer3cloud9.display(740,30,415,425,250,5);
    layer3cloud9.update();

    layer3cloud10.display(200,40,400,405,250,1);
    layer3cloud10.update();


    //BOATS
    boat1.display(20);
    boat1.update();

    boat2.display(100);
    boat2.update();

    boat3.display(500);
    boat3.update();

    boat4.display(700); //not updating this one - want to keep it stationary as part of the scenery

    //"WATER" - all of these rectangles are here to create a gradient effect since I don't know how to do that yet!
    fill(32.5,89.5,96.5,40);
    rect(0,487.5,width,200);
    rect(0,487.5,width,130);
    rect(0,487.5,width,125);
    rect(0,487.5,width,120);
    rect(0,487.5,width,115);
    rect(0,487.5,width,110);

    fill(55.5,140.3,160.1,100);
    rect(0,487.5,width,105);
    rect(0,487.5,width,100);
    rect(0,487.5,width,95);
    rect(0,487.5,width,90);
    rect(0,487.5,width,85);

    fill(65,179,193,150);
    rect(0,487.5,width,80);
    rect(0,487.5,width,75);
    rect(0,487.5,width,70);

    fill(65,179,193,255);
    rect(0,487.5,width,60);

    fill(50,150,180,255);
    rect(0,487.5,width,6);
    
    fill(40,100,150,255);
    rect(0,487.5,width,3);

    fill(30,50,100,255);
    rect(0,487.5,width,1);

    //"PIER"
        //SHADOW
    fill(27,94,106,180);
    beginShape();
    vertex(-20,600);
    vertex(230,533);
    vertex(120.5,533);
    vertex(-20,555);
    endShape();

        //LEFT-SIDE LEGS
    fill('#1E3A41');
    rect(45,540,10,35);
    rect(90,540,8,18);
    rect(108,530,7,20);
    rect(145,520,5,20);

        //RIGHT-SIDE LEGS
    noStroke();
    fill('#1F4B54');

    rect(21.75,540,15,65);
    rect(75,540,14,50);
    rect(115.5,530,13,45);
    rect(152.25,520,10,40);
    rect(190,500,8,40);

        //BOARDWALK
    fill('#235660');
    beginShape();
    vertex(0,567);
    vertex(250,500);
    vertex(130.5,500);
    vertex(0,522);
    endShape();


        //BOARDWALK THICKNESS
    fill('#1B3232');
    beginShape();
    vertex(250,500);
    vertex(250,505);
    vertex(0,572);
    vertex(0,567);
    endShape();


    //BIRDS
    bird1.display(100,100);
    bird1.update();
    bird1.checkWings();

    bird2.display(120,120);
    bird2.update();
    bird2.checkWings();

    bird3.display(90,115);
    bird3.update();
    bird3.checkWings();

    bird4.display(100,130);
    bird4.update();
    bird4.checkWings();

    bird5.display(130,140);
    bird5.update();
    bird5.checkWings();

}


