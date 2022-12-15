function setup() {
    createCanvas(800, 800);
    background(220)
    zwart = color(80,80,80)
    wit = color(200,200,200)
    coloursquares = [zwart, wit, zwart]

  }
function preload() {
    br = loadImage('https://infgc.filestash.app/api/files/cat?path=%2Fhome%2F20v_juliann%2Fpublic_html%2Fgames%2Fchess%2Fbr.png&size=2560')
    bn = 1 //loadImage('bn.png')
    bb = 1 //loadImage('bb.png')
    bk = 1 //loadImage('bk.png')
    bc = 1 //loadImage('bk.png')
    bq = 1 //loadImage('bq.png')
    bp = 1 //loadImage('bp.png')
    wr = 1 //loadImage('wr.png')
    wn = 1 //loadImage('wn.png')
    wb = 1 //loadImage('wb.png')
    wk = 1 //loadImage('wk.png')
    wc = 1 //loadImage('wk.png')
    wq = 1 //loadImage('wq.png')
    wp = 1 //loadImage('wp.png')
}
function draw() {
   // tekent vakjes
    for(let i = 0; i < 64; i++) {
        //noStroke();
        fill(coloursquares[i % 2 + (floor(i/8) % 2)])
        rect((i % 8)*100,floor(i/8)*100,100,100)
    }

    // setup van het boord
    pieces = [br,bb,bn,bq,bk,bn,bb,br,bp,bp,bp,bp,bp,bp,bp,bp]
    for(let i = 0; i < 32; i++) {pieces.push(0)}
    pieces.push(wp,wp,wp,wp,wp,wp,wp,wp,wr,wb,wn,wq,wk,wn,wb,wr)
    
image(br,0,0,100,100)
    // tekent de pieces
    for(let i = 0; i < 64; i++) { 
        if(pieces[i] != 0) {
            image(br,i % 8 * 100,floor(i/8)*100,100,100)
        }
    }


}