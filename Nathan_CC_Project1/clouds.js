//CLASS FOR THE CLOUDS

class Cloud{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
    }

    update(){
        let speed = 0.02;
        this.velocity = createVector(speed,0);
        this.position.add(this.velocity);
       
    }

    display(xPos,size,cloudheight,cloudbottom,cloudcolor,cloudspacing){
        if (this.position.x>=10){
            this.position.x = 0;
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
    }

    update(){
        let speed = 0.02;
        this.velocity = createVector(speed,0);
        this.position.add(this.velocity);
       
    }

    display(xPos,size,cloudheight,cloudbottom,cloudspacing){

        if (this.position.x>=10){
            this.position.x = 0;
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

            fill(230);
            ellipse(xPos-5+this.position.x,yvalue+10,size,size);
            ellipse(xPos+5+this.position.x,yvalue+10,size,size);
            ellipse(xPos+15+this.position.x,yvalue+10,size,size);
            ellipse(xPos+25+this.position.x,yvalue+15,size,size);
            ellipse(xPos+35+this.position.x,yvalue+10,size,size);
        
        }

    
    }
}