function setup(){
macanva = createCanvas(400,400)
macanva.center()
venom_venom = ml5.objectDetector("cocossd", modelocargado)
}
function modelocargado(){
    console.log('MODELO CAGADO')
jiji = true
venom_venom.detect(asnrt, gotResult)
}
var asnrt = ""
function preload(){
asnrt = loadImage("coat_types_3.jpg")
}
TIBURONCINHUHAHA = []
jiji = ''
function draw(){
    image(asnrt, 0, 0, 400,400)
    if(jiji != ''){
        for(i = 0; i < TIBURONCINHUHAHA.length; i ++){
            document.getElementById('opok').innerHTML = 'objetosDetectados'
            fill('black')
            preetico = floor(TIBURONCINHUHAHA[i].confidence * 100)
            textSize(30)
            text(TIBURONCINHUHAHA[i].label + preetico, TIBURONCINHUHAHA[i].x,TIBURONCINHUHAHA[i].y,)
            noFill()
            rect(TIBURONCINHUHAHA[i].x +5,TIBURONCINHUHAHA[i].y +5,TIBURONCINHUHAHA[i].width +5,TIBURONCINHUHAHA[i].heigth +5)
        }
    }
}
function gotResult(error, results){
if (error) {
    console.error(error)
} else {
    console.log(results)
    TIBURONCINHUHAHA = results
}
}