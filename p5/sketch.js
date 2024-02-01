//images
var ma256, ni256;
var titleImage;
var textImages = [];

function preload(){
    //preload imagess
    ma256 = loadImage("./images/ma_256.png");
    ni256 = loadImage("./images/ni_256.png");

    //タイトル
    titleImage = loadImage("./images/title.png");

    //配列にする
    textImages = [ma256, ni256];
}

var circles = [];
const MAX_AGENT_NUM = 100;
const MIN_RADIUS = 10;
const MAX_RADIUS = 120;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    //フレームレートの固定
    frameRate(10);
}

function update(){
    if(circles < 1){
        var r = random(MIN_RADIUS, MAX_RADIUS);
        circles.push(new Circle(
            random(0 + r, windowWidth - r),
            random(0 + r, windowHeight - r),
            r ));
    }else{
        var newCircle = new Circle(
            random(0, windowWidth),
            random(0, windowHeight),
            0
        );

        //被っていないか調べる
        var touched = false;
        for(var i = 0; i < circles.length; i++){
            var distance = dist(
                circles[i].position.x, circles[i].position.y,
                newCircle.position.x, newCircle.position.y
            );

            if(distance < circles[i].r + newCircle.r){
                touched = true;
                break;
            }
        }

        if(touched == false){
            //いちばん近い円を調べる
            var nearDist = windowWidth * windowHeight;
            var nearIndex = 0;
            var d = 0;

            for(var i = 0; i < circles.length; i++){
                var d = dist(
                    circles[i].position.x, circles[i].position.y,
                    newCircle.position.x, newCircle.position.y
                );

                if(nearDist > d - circles[i].r){
                    nearDist = d - circles[i].r;
                    nearIndex = i;
                }
            }

            //円に接するように半径を大きくする
            if(nearDist > MAX_RADIUS){
                newCircle.r = MAX_RADIUS;
            }else{
                newCircle.r = nearDist;
            }

            circles.push(newCircle);
        }
    }
}

function draw(){
    update();

    for(var i = 0; i < circles.length; i++){
        if(i % 2 == 1){
            circles[i].setImageIndex(1);
        }
        circles[i].draw();
        // circles[i].drawDebugCircle();
    }

    //タイトルの描画
    noStroke();
    fill(255,255,255,240);
    rect(0,0,windowWidth,windowHeight);

    // if(windowWidth > windowHeight){
    //     image(titleImage, windowWidth / 2 - windowHeight / 2, 0, windowHeight, windowHeight);
    // }

    // if(windowWidth < windowHeight){
    //     image(titleImage, 0, windowHeight / 2 - windowWidth / 2, windowWidth, windowWidth);
    // }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}