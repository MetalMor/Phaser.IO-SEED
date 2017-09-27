import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.game = game
    this.game = game
    this.anchor.setTo(0.5)
    console.log(this)
  }

  update () {
    // this.angle += 1
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.x -= 4
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.x += 4
    }
  }
}
