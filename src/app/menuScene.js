import Phaser from "phaser";

export default {
  key: "menu",

  create: function() {

    this.add.image(400, 300, "background5");
    this.add.image(400, 300, "background4");
    this.add.image(400, 300, "background3");
    this.add.image(400, 300, "background2");
    this.add.image(400, 300, "background1");
    //this.add.image(400, 300, "title");



      let title = this.add.image(400, 300, "title");
      //title.setScale(4);
      title.setInteractive();
      title.on("pointerdown", () => {

      });
      title.on("pointerover", () => title.setTint(0xcccccc));
      title.on("pointerout", () => title.setTint(0xffffff));
      //title.add.on("pointerover", () => restart.setTint(0xcccccc));
      //title.add.on("pointerout", () => restart.setTint(0xffffff));

    title.on(
      "pointerdown",
      function() {
        console.log("aa");
        this.scene.switch("play");
      },
      this
    );

/*
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
*/
  }
};
