"use strict";

/* 
    Методи об'єкта і this при зверненні до об'ктів.
*/

/* 
    changeTitle(newTitle)
    addActor(newActor)
    updateRating(newRating)
    getHasTrailer()
*/

const film = {
  title: "Venom",
  descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  rating: 8,
  actors: ["Bim Bom", "Pete Stone", "Jack Hill"],
  hasTrailer: true,

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    this.actors.push(newActor);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getHasTrailer() {
    return this.hasTrailer;
  },
};

film.changeTitle("Duna");
film.addActor("Philip Morris");
film.updateRating(5);
film.getHasTrailer();

console.log("film :>> ", film);
console.log(film.getHasTrailer());
