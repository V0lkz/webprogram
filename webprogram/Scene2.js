class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create(){
        //map loading....
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage("map", "tiles");    
        const background = map.createLayer("background",tileset,0,0);    
        const ground = map.createLayer("ground", tileset, 0, 0); 

        // set collides
        ground.setCollisionBetween(1, 44);  
        /* const debugGraphics = this.add.graphics().setAlpha(0.75);
        ground.renderDebug(debugGraphics, {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        });   */
        this.player = this.physics.add.sprite(config.width/2 - 30 ,config.height/2 +16, "playeride");
        this.cameras.main.startFollow(this.player);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player,ground);
        
        this.Enemies = this.add.group();
        let enemies1 = new Mushroom({scene:this,x:150,y:100}); 
        let enemies2 = new Goblin({scene:this,x:100,y:100});
        this.physics.add.collider(this.Enemies,ground);
        
       
        
    }
    
    ifincreasing(y){
      var speed = this.player.body.velocity.y;
      
      
      if(speed < 1){
          this.player.play("playjumping_anims",true);
          
      }
      if(speed > 1){
        this.player.play("playerfalling_anims",true);
        
      }
      
      
    }
      
    movementhandling(){
        const y = this.player.body.y;
       if(this.cursorKeys.up.isDown && this.player.body.onFloor()){
        this.player.setVelocityY(-100);
        //this.player.play("playjumping_anims",true);
      
      } 
      if(this.player.body.onFloor() == false){
        //this.player.play("playerfalling_anims",true);
        this.ifincreasing(y);
      }
      

      if(this.cursorKeys.left.isDown ){
        this.player.setVelocityX(-100);
        this.player.scaleX = -1;
        this.player.body.offset.x = 16;
        if(this.player.body.onFloor()){
        
        this.player.play("playerRunning_anims",true);
        }
        
        
      }
      if(this.cursorKeys.right.isDown){
        this.player.setVelocityX(100);
        this.player.scaleX = 1;
        this.player.body.offset.x = 0;
        if(this.player.body.onFloor()){
        this.player.play("playerRunning_anims",true);
        
        }
       
      }
      
      if(this.cursorKeys.right.isUp && this.cursorKeys.left.isUp ){
        this.player.setVelocityX(0);
        if(this.cursorKeys.up.isUp && this.player.body.onFloor()){
        this.player.play("playeride_anims",true);
        }
        
     
      } 

  }

 
    update(){
       
          this.movementhandling();

         
          
        
    }
}