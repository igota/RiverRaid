var canvas = document.getElementId("tela");
var ctx = canvas.getContext("2d");

function Jogo(canvasID) {
  "use strict";
  this.canvas = document.getElementId(canvasID);
  this.player = new player("");

  this.temporizador = null;
  this.emPausa = true;
}
this.construir();
//Fim do construtor
Jogo.instancia = new Jogo("tela");

Jogo.construir = function () {
  Jogo.instancia.construir();
};

Jogo.novoJogo = function (canvasID) {
  "use strict";
  if (!Jogo.instancia.emPausa) {
    Jogo.instancia.pausar();
  }
  Jogo.instancia = new Jogo(canvasID);
};
