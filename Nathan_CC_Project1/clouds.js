//CLASS FOR THE CLOUDS

class Cloud{
    constructor(){
        // this.position = new createVector(0,0);
        // this.velocity=new createVector();
    }

    display(xPos,size,cloudheight,cloudbottom,cloudcolor,cloudspacing){
        for (let yvalue=cloudbottom; yvalue>=cloudheight; yvalue-=cloudspacing){
            noStroke();
            fill(cloudcolor);
            ellipse(xPos,yvalue,size,size);
        
        }

    
    }
}

class Cluster{
    constructor(){

    }

    display(xPos,size,cloudheight,cloudbottom,cloudspacing){
        for (let yvalue=cloudbottom; yvalue>=cloudheight; yvalue-=cloudspacing){
            noStroke();
            fill(255);
            ellipse(xPos,yvalue,size,size);
            ellipse(xPos+10,yvalue+5,size,size);
            ellipse(xPos+20,yvalue+5,size,size);
            ellipse(xPos+40,yvalue,size+10,size+10);
            ellipse(xPos+50,yvalue,size,size);
            ellipse(xPos-10,yvalue+5,size,size);
            ellipse(xPos-14,yvalue+15,size,size);

            fill(230);
            ellipse(xPos-5,yvalue+10,size,size);
            ellipse(xPos+5,yvalue+10,size,size);
            ellipse(xPos+15,yvalue+10,size,size);
            ellipse(xPos+25,yvalue+15,size,size);
            ellipse(xPos+35,yvalue+10,size,size);
        
        }

    
    }
}