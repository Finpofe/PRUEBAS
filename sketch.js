var cielo1, cielo1Img
var cielo2, cielo2Img
//var cielo3, cielo3Img
//var cielo4, cielo4Img
var bottomGround
var topGround
var cat, catImg
var obstaculo, obstaculoImg

function preload(){
    cielo1Img = loadImage("imagenes/cielo1.png")
    cielo2Img = loadImage("imagenes/cielo2.png")
    //cielo3Img = loadImage("imagenes/cielo3.png")
    //cielo4Img = loadImage("imagenes/cielo4.png")

    catImg = loadAnimation("imagenes/Gato1.png","imagenes/Gato2.png","imagenes/Gato3.png",
    "imagenes/Gato4.png","imagenes/Gato5.png","imagenes/Gato6.png","imagenes/Gato7.png","imagenes/Gato8.png")

    obstaculoImg = loadImage("imagenes/obstaculo.png")
    }
    
    function setup(){
    
    createCanvas(1280,720);

    //background image
    cielo1 = createSprite(200,0);
    //cielo1.addImage(cielo1Img);
    //cielo1.scale = 1;
    getBackgroundImg();
    
    //creating top and bottom grounds
    bottomGround = createSprite(200,390,800,20);
    bottomGround.visible = false;
    
    topGround = createSprite(200,10,800,20);
    topGround.visible = false;
          
    //creating balloon     
    cat = createSprite(100,200,20,50);
    cat.addAnimation("Gato",catImg);
    cat.scale = 0.5;
    cat.velocityX = 10

    obstaculo = createSprite(400,508,20,50);
    obstaculo.addImage("Tubo", obstaculoImg);
    obstaculo.scale = 0.5;
    
    }
    
    function draw() {
      
      background("black");
            
              //making the hot air balloon jump
              if(keyDown("Space")) {
                cat.velocityY = -10 ;
                 
              }
    
              //adding gravity
              cat.velocityY = cat.velocityY + 2;
       
            drawSprites();
            
    }
    
    // Usando llamadas a la API para configurar la imagen de fondo de acuerdo al tiempo
    async function getBackgroundImg(){
      //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
      var responseJSON = await response.json();
    
      var datetime = responseJSON.datetime;
      var hour = datetime.slice(11,13);
      
      if(hour>=07 && hour<=12){
        
        cielo1.addImage(cielo1Img);
        cielo1.scale = 0.7
      }else{ 
      //if(hour>=12 && hour<=16){
        
        cielo1.addImage(cielo2Img);
        cielo1.scale = 0.1
      }//else
      //if(hour>=16 && hour<=20){
        
      //  cielo1.addImage(cielo3Img);
      //  cielo1.scale = 1
      //}else
      //if(hour>=20 && hour<=07){
        
      //  cielo1.addImage(cielo4Img);
      //  cielo1.scale = 1
//}

    }