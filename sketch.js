var hr, sc, mn
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');

  angleMode(DEGREES)

  hr = hour()
  hr = hr%12
  //console.log(hr)
  sc = second()
  mn = minute()
  console.log(hr,mn,sc)
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

  
  translate(200, 200)
  rotate(-90);

  push()
  fill('white')
  ellipse(0,0,200,200)
  pop()
  
  push()
  rotate(scAngle)
  stroke(255, 0, 0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,80,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  
}
