//CLASS FOR THE SMALL BIRDS IN THE SKY
class Bird{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
        this.speed = 1;
    }

    update(){
        this.velocity = createVector(0,this.speed);
        this.position.add(this.velocity);    
    }

    display(xPos,yPos){ //5 individual, layered beziers to achieve a "fade-out" effect
        noFill();
        strokeWeight(2);
        stroke(255,255,255);

        curve(xPos,yPos+10+this.position.y,xPos,yPos-5,xPos-10,yPos-5,xPos-15+this.position.y,yPos+5);
        curve(xPos,yPos+10+this.position.y,xPos,yPos-5,xPos+10,yPos-5,xPos+15-this.position.y,yPos+5);
    }

    checkWings(){ //birds flap wings!

        if (this.position.y >= 20) {
		    this.speed=-1;
	    }
	    else if (this.position.y <= 0) {
	    	this.speed=1;
	    }
  }
}