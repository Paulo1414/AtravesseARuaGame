

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  mostraAtor();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}





