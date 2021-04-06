//CLASS FOR THE TEAL STREAKS IN THE SKY
class SkyStreak{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
    }

    update(){
        let speed = -0.2;
        this.velocity = createVector(0,speed);
        this.position.add(this.velocity);      
    }

    display(yPos){ //5 individual, layered beziers to achieve a "fade-out" effect
        if (this.position.y+yPos+50<0){
         this.position.y = height-yPos;
        }   
        
        let t = this.position.y+yPos; //curves get more transparent as they travel up

        noFill();
        strokeWeight(28);
        stroke(1,121,161,t/2.35); //darkest 
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(21);
        stroke(0,131,169,t/2.35);
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(15);
        stroke(1,135,172,t/2.35); 
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(10)
        stroke(0,151,184,t/2.35); 
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(6)
        stroke(15,162,188,t/2.35); 
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(3)
        stroke(31,169,191,t/2.35); //lightest
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);
    }
}