//CLASS FOR THE TEAL STREAKS IN THE SKY

class SkyStreak{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
    }

    update(){
        let speed = -0.1;
        this.velocity = createVector(0,speed);
        this.position.add(this.velocity);
       
    }



    display(yPos){ //5 individual, layered beziers to achieve a "fade-out" effect
        if (this.position.y+yPos+50<0){
         this.position.y = height-yPos;
        }

     

        noFill();
        strokeWeight(28);
        stroke('#0179A1'); //darkest
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(21);
        stroke('#0083A9'); //darkest
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(15);
        stroke('#0187AC'); //darkest
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(10)
        stroke('#0097B8'); 
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(6)
        stroke('#0FA2BC'); 
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

        strokeWeight(3)
        stroke('#1FA9BF'); //lightest
        bezier(0,this.position.y+yPos, 333, this.position.y+yPos+50, 666, this.position.y+yPos-30, width, this.position.y+yPos-15);

    

    }




}