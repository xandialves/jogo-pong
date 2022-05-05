let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadexBolinha = 3;
let velocidadeyBolinha = 3;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

let hit = false;

let MeusPontos = 0;
let PontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Bolinha();
  MostraRaquete(xRaquete, yRaquete);
  MostraRaquete(xRaqueteOponente, yRaqueteOponente);

  Placar();
  MarcarPontos();

  MovimentoMinhaRaquete();
  MovimentoRaqueteOponente();
  Colisao(xRaquete, yRaquete);
  Colisao(xRaqueteOponente, yRaqueteOponente);

  function Bolinha() {
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;

    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeyBolinha *= -1;
    }
  }
  function MostraRaquete(x, y) {
    rect(x, y, comprimentoRaquete, alturaRaquete);
  }

  function MovimentoMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 5;
    }
  }

  function MovimentoRaqueteOponente() {
    VelocidadeyOponente = yBolinha - yRaqueteOponente - alturaRaquete / 2 - 50;
    yRaqueteOponente += VelocidadeyOponente;
  }

  function Colisao(x, y) {
    hit = collideRectCircle(
      x,
      y,
      comprimentoRaquete,
      alturaRaquete,
      xBolinha,
      yBolinha,
      diametro
    );
    if (hit) {
      velocidadexBolinha *= -1;
    }
  }
  function Placar() {
    textSize(32);
    fill(255);
    text(MeusPontos, 278, 26);
    text(PontosOponente, 321, 26);
  }
  function MarcarPontos() {
    if (xBolinha < 10) {
      PontosOponente++;
    }
    if (xBolinha > 590) {
      MeusPontos++;
    }
  }
}
