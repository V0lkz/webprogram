class Scene1 extends Phaser.Scene{
    constructor(){
        super("preload");
    }

    preload(){
        this.load.image("tiles","assets/tileset.png");
        this.load.tilemapTiledJSON("map","assets/map.json");
        this.load.spritesheet("playeride", "assets/herochar_idle_anim_strip_4.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("playerRunning","assets/herochar_run_anim_strip_6.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        
        
        
    }

    create(){
        
        
        /* const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage("map", "tiles");    
        const background = map.createLayer("background",tileset,0,0);    
        const ground = map.createLayer("ground", tileset, 0, 0); 
        ground.setCollisionBetween(1, 44); */

        
        

        //animations
         this.anims.create({
            key: 'playeride_anims',
            frames: this.anims.generateFrameNumbers("playeride"),
            frameRate: 7,
            repeat: -1
           
        }); 
        this.anims.create({
            key:'playerRunning_anims',
            frames: this.anims.generateFrameNumbers("playerRunning"),
            frameRate: 10,
            
        });
        

        this.scene.start("playGame");

        
    }
    update(){
        
        
    }
}

