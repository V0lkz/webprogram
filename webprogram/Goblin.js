class Goblin extends Phaser.GameObjects.Sprite
{
    constructor(config){
        super(config.scene,config.x,config.y,"goblinide");
        config.scene.add.existing(this);
        config.scene.physics.world.enableBody(this);
        config.scene.Enemies.add(this);

        this.body.velocity.x = 50;
        this.play("goblinide_anims",true);
           
        
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        if(this.body.blocked.left){
            this.body.velocity.x = 50;
            this.scaleX = 1;
            this.body.offset.x = 0;
            this.play("goblinwalk_anims",true);
        }
        if(this.body.blocked.right){
            this.body.velocity.x = -50;
            this.scaleX = -1;
            this.body.offset.x = 16;
            this.play("goblinwalk_anims",true);
        }   
    }

    
}