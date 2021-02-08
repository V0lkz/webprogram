var config = {
    width: 300,
    height: 200,
    backgroundColor: 0x7bd5db,
    scene:[Scene1, Scene2],
    physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 100 } // Top down game, so no gravity
        }
      }

};

var game = new Phaser.Game(config);