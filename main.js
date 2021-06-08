canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.gif";

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car 2.png";
car2_x = 10;
car2_y = 100;

function add (){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground() 
 {
      ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }

 function uploadCar1()
 {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height); 
 }

 function uploadCar2()
 {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
 }

 window.addEventListener("keydown", my_keydown);
        function my_keydown(e)
        {
        keyPressed = e.keyCode;
        console.log("keyPressed");

            if(keyPressed == '38') 
            { 
                car1Up(); 
                console.log("up arrow pressed");
            }
                     
            if(keyPressed == '40') 
            {
                car1down();
                console.log("down arrow pressed");
            }

            if(keyPressed == '37')
            {
                 car1left();
                 console.log("left arrow pressed"); 
            }
            
            if(keyPressed == '39')
            {
                car1right(); 
                console.log("right arrow pressed"); 
            }

            if(keyPressed == '87') 
            { 
                car2Up(); 
                console.log("w pressed");
            }

            if(keyPressed == '83') 
            { 
                car2Down(); 
                console.log("s pressed");
            }

            if(keyPressed == '65') 
            { 
                car2Left(); 
                console.log("a pressed");
            }

            if(keyPressed == '68') 
            { 
                car2Right(); 
                console.log("d pressed");
            }
} 