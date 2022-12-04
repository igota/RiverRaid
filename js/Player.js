function Player(startX, positionY) {
  "use strict";
  this.imagem = new Image();
  this.x = startX;
  this.y = positionY;
  this.esquerda = false;
  this.direita = false;

  this.setMoverEsquerda = function (booleano) {
    this.esquerda = booleano;
    if (this.esquerda) {
      this.direita = false;
    }
  };
  this.setMoverDireita = function (booleano) {
    this.direita = booleano;
    if (this.direita) {
      this.esquerda = false;
    }
  };
}

this.mover = function () {
  if (this.esquerda) {
    this.x -= 2;
  } else if (this.direita) {
    this.x += 2;
  }
};
