class Water{
    constructor(){
        this.position = new createVector(0,0);
        this.velocity=new createVector();
        this.speed = 0.15;
    }

    update(){
        this.velocity = createVector(0,this.speed);
        this.position.add(this.velocity);      
    }

    display(yPos,waterheight){
        if (this.position.y>=10){
            this.speed=-0.15;
           }   
        else if (this.position.y<=0){
            this.speed=0.15;
        }

        rect(0,yPos+this.position.y,width,waterheight);
        
    }
}