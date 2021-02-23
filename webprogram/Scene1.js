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
        this.load.spritesheet("playerfalling","assets/herochar_jump_down_anim_strip_3.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("playerjumping","assets/herochar_jump_up_anim_strip_3.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        
        //mushroom
        this.load.spritesheet("mushroomide","assets/mushroom/mushroom_crushed_anim_strip_6.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("mushroomwalk","assets/mushroom/mushroom_walk_anim_strip_8.png",{
            frameWidth: 16,
            frameHeight: 16
        });

        //goblin
        this.load.spritesheet("goblinide","assets/goblin/goblin_idle_anim_strip_4.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("goblinattack","assets/goblin/goblin_attack_anim_strip_4.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("goblinrun","assets/goblin/goblin_run_anim_strip_6.png",{
            frameWidth: 16,
            frameHeight: 16
        })
        
        
    }

    create(){
        
        
        /* const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage("map", "tiles");    
        const background = map.createLayer("background",tileset,0,0);    
        const ground = map.createLayer("ground", tileset, 0, 0); 
        ground.setCollisionBetween(1, 44); */

        
        

        //animations
        //player animations
        this.anims.create({
            key:'playjumping_anims',
            frames: this.anims.generateFrameNumbers("playerjumping"),
            frameRate: 7,
            repeat: -1
        });
        this.anims.create({
            key: 'playerfalling_anims',
            frames: this.anims.generateFrameNumbers("playerfalling"),
            frameRate: 10,
            repeat: -1
        });
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
        
        //mushroom animations
        this.anims.create({
            key:'mushroomide_anims',
            frames: this.anims.generateFrameNumbers("mushroomide"),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'mushroomwalk_anims',
            frames: this.anims.generateFrameNumbers("mushroomwalk"),
            frameRate: 5,
            repeat: -1
        });
        
        //goblin animations
        this.anims.create({
            key:'goblinide_anims',
            frames: this.anims.generateFrameNumbers("goblinide"),
            frameRate: 5,
            repeat: -1
        });
        
        this.anims.create({
            key:'goblinwalk_anims',
            frames: this.anims.generateFrameNumbers("goblinrun"),
            frameRate: 5,
            repeat: -1
        });


        this.scene.start("playGame");

        
    }
    update(){
        
        
    }
}

