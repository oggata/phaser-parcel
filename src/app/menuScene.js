import Phaser from "phaser";

export default {
  key: "menu",

  create: function() {

    this.add.image(400, 300, "background5");
    this.add.image(400, 300, "background4");
    this.add.image(400, 300, "background3");
    this.add.image(400, 300, "background2");
    this.add.image(400, 300, "background1");
    this.add.image(400, 300, "title");

    this.add
      .text(400, 300, "test test test\n\n(play)", {
        align: "center",
        fill: "lime",
        fontFamily: "sans-serif",
        fontSize: 48
      })
      .setOrigin(0.5, 0);
    this.input.on(
      "pointerdown",
      function() {
        console.log("aa");
        this.scene.switch("play");
      },
      this
    );
  }
};
