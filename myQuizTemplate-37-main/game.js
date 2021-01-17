class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
  }
  
    play(){
  
      form.hide();
      text("GAME HAS STARTED",120,100)
      Player.getInfo();
      fill("red")
      
      if(allPlayers != undefined){
  
        var y = 130
  
        for(var rap in allPlayers){
  
          if(rap === "player"+player.index){
  
            fill("blue")
  
         }
  
         else{
  
          fill("red")
  
         }
          text(allPlayers[rap].name+":"+allPlayers[rap].distance,120,y)
          y=y+20
  
  
        }
  
  
  
      }
  
      if(keyIsDown(UP_ARROW)&&player.index != null){
  
        player.distance = player.distance + 25
        player.update();
  
      }
  
  
    }
  
  
  
  
  
  
  
  }