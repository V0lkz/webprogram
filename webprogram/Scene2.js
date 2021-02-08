class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create(){
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage("map", "tiles");    
        const background = map.createLayer("background",tileset,0,0);    
        const ground = map.createLayer("ground", tileset, 0, 0); 
        ground.setCollisionBetween(1, 44);
        const debugGraphics = this.add.graphics().setAlpha(0.75);
        /* ground.renderDebug(debugGraphics, {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        });  */
        this.player = this.physics.add.sprite(config.width/2 - 30 ,config.height/2 +16, "playeride");
        this.physics.add.collider(this.player,ground);
        this.cameras.main.startFollow(this.player);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.play("playeride_anims");
        
    }
    update(){
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-100);
            
          }
          if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(100);
            //this.player.play("playerRunning_anims",true);
          }
          if(this.cursorKeys.right.isUp && this.cursorKeys.left.isUp){
            this.player.setVelocityX(0);
            
            //this.player.play("playeride_anims");
          }
        
    }
}