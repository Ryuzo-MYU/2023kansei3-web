function Circle(_x, _y, _r){
    
    this.position = createVector(_x, _y);
    this.r = _r;
    this.textImageIndex = 0;

    this.draw = function(){
        var rectSize = Math.sqrt(3) * this.r / 2.2;

        image(
            textImages[this.textImageIndex],
            this.position.x - rectSize,
            this.position.y - rectSize,
            rectSize * 2,
            rectSize * 2
            );
    }

    this.drawDebugCircle = function(){
        ellipse(this.position.x, this.position.y, this.r * 2);
    }

    this.setRadius = function(_r){
        this.r = _r;
    }

    this.setImageIndex = function(_index){
        this.textImageIndex = _index;
    }
}

function TitleType(){
    
}