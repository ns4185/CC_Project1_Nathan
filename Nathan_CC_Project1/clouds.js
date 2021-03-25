//CLASS FOR THE CLOUDS
class Cloud{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
        this.speed = 0.1;
    }

    update(){
        this.velocity = createVector(this.speed,0);
        this.position.add(this.velocity);      
    }

    display(xPos,size,cloudheight,cloudbottom,cloudcolor,cloudspacing){
        if (this.position.x>=10){
            this.speed=-0.1;
           }   
        else if (this.position.x<=0){
            this.speed=0.1;
        }

        for (let yvalue=cloudbottom; yvalue>=cloudheight; yvalue-=cloudspacing){
            noStroke();
            fill(cloudcolor);
            ellipse(xPos+this.position.x,yvalue,size,size);       
        }  
    }
}

class Cluster{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
        this.speed = 0.1;
    }

    update(){
        this.velocity = createVector(this.speed,0);
        this.position.add(this.velocity);       
    }

    display(xPos,size,cloudheight,cloudbottom,cloudspacing){

        if (this.position.x>=10){
            this.speed=-0.1;
           }   
        else if (this.position.x<=0){
            this.speed=0.1;
        } 

        for (let yvalue=cloudbottom; yvalue>=cloudheight; yvalue-=cloudspacing){
            noStroke();
            fill(255);
            ellipse(xPos+this.position.x,yvalue,size,size);
            ellipse(xPos+10+this.position.x,yvalue+5,size,size);
            ellipse(xPos+20+this.position.x,yvalue+5,size,size);
            ellipse(xPos+40+this.position.x,yvalue,size+10,size+10);
            ellipse(xPos+50+this.position.x,yvalue,size,size);
            ellipse(xPos-10+this.position.x,yvalue+5,size,size);
            ellipse(xPos-14+this.position.x,yvalue+15,size,size);

            fill(240);
            ellipse(xPos-5+this.position.x,yvalue+10,size,size);
            ellipse(xPos+5+this.position.x,yvalue+10,size,size);
            ellipse(xPos+15+this.position.x,yvalue+10,size,size);
            ellipse(xPos+25+this.position.x,yvalue+15,size,size);
            ellipse(xPos+35+this.position.x,yvalue+10,size,size);     
        }
    }
}

class randomCluster{ //fill is random values of gray
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
        this.speed = 0.08;
        this.colorvalue = random(20); //to include random in the fill color, but keep everything the same color
    }

    update(){
        this.velocity = createVector(this.speed,0);
        this.position.add(this.velocity);
       
    }

    display(xPos,size,cloudheight,cloudbottom,cloudspacing){

        if (this.position.x>=10){
            this.speed=-0.08;
           }   
        else if (this.position.x<=0){
            this.speed=0.08;
        }


        for (let yvalue=cloudbottom; yvalue>=cloudheight; yvalue-=cloudspacing){
            noStroke();
            fill(255-this.colorvalue/3);
            ellipse(xPos+this.position.x,yvalue,size,size);
            ellipse(xPos+10+this.position.x,yvalue+5,size,size);
            ellipse(xPos+20+this.position.x,yvalue+5,size,size);
            ellipse(xPos+40+this.position.x,yvalue,size+10,size+10);
            ellipse(xPos+50+this.position.x,yvalue,size,size);
            ellipse(xPos-10+this.position.x,yvalue+5,size,size);
            ellipse(xPos-14+this.position.x,yvalue+15,size,size);

            fill(250-this.colorvalue);
            ellipse(xPos-5+this.position.x,yvalue+10,size,size);
            ellipse(xPos+5+this.position.x,yvalue+10,size,size);
            ellipse(xPos+15+this.position.x,yvalue+10,size,size);
            ellipse(xPos+25+this.position.x,yvalue+15,size,size);
            ellipse(xPos+35+this.position.x,yvalue+10,size,size);
        

            fill(255);
            ellipse(xPos+this.position.x,yvalue+20,size,size);
            ellipse(xPos+10+this.position.x,yvalue+10,size-3,size-3);
            ellipse(xPos+20+ this.position.x,yvalue+30,size-2,size-2);
            ellipse(xPos+40+this.position.x,yvalue+15,size,size);
        }
    
    }
}