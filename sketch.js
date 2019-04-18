var ypos = 60 // bepaalt Y positie van de vierkantjes.
var xpos = 60 // bepaalt de X positie van de vierkantjes.
var xstep = 80 // afstand tussen de vierkantjes op de X positie.
var ystep = 80 // afstand tussen de vierkantjes op de Y positie.

function setup() {
  createCanvas(530,530); // creërt een doek van 530 pixels bij 530 pixels.
  rectMode(CENTER); // zorgt dat de vierkantjes om hun as draaien en niet vanaf linksboven.
}

function draw() {
  stroke(100) //maakt de uitlijning van de vierkantjes grijs waardoor je ziet waar ze samenkomen.
  background(100, 0, 0) // hierdoor is de achtergrond donkerrood.
  for (var kolom = 0; kolom < 6; kolom++) {
    for (var rij = 0; rij < 6; rij++) {
      push()
      translate(xpos + (xstep * kolom), ypos + (ystep * rij))
      rotate(frameCount / 20); // bepaalt de snelheid van de vierkantjes, hoe dichter de framecount bij de 0 is hoe sneller de vierkantjes draaien.
    
        if (kolom < 3) { // als de kolom kleiner is dan 3 wordt de kleur van de vierkantjes (0,0,0) ook wel zwart, en als de kolom groter is dan 3 wordt de kleur van de vierkantjes (255,255,255) ook wel wit.

          fill(0, 0, 0);
        } else {
          fill(255, 255, 255)
       
      }

      rect(0, 0, 80, 80) // zorgt voor de grootte van de vierkantjes.

      pop()
    }
  }
}
