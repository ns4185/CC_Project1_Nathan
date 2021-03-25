class Boat{
    constructor(){
         this.position = new createVector(0,0);
         this.velocity=new createVector();
         this.speed=random(0.3);
         this.flaglength=random(5);
         
    }
    
    update(){
        this.velocity = createVector(this.speed,0);
        this.position.add(this.velocity);
     }

    display(xPos){
        if (this.position.x+xPos>=1100){
            this.position.x = -50;
           }  

        fill('#473C24');
        noStroke;
        beginShape();
        vertex(this.position.x+xPos-10,480); //body
        vertex(this.position.x+xPos+10,480);
        vertex(this.position.x+xPos+5,490);
        vertex(this.position.x+xPos-5,490);
        endShape();

        rect(this.position.x+xPos-1,470,2,10); //pole

        beginShape(); //flag
        vertex(this.position.x+xPos,470);
        vertex(this.position.x+xPos+4,475+this.flaglength);
        vertex(this.position.x+xPos,475+this.flaglength);
        endShape();
    }

    
    

}