//JS
// ClearScreen
function clearScreen() {
    var dispID= document.getElementById('result')
    dispID.value = '';
}
// Display
function calcDisp(value) {
    var dispID= document.getElementById('result')
    document.getElementById('result').value += value;
}
// TrigFunctions
function trig(trigType){
    var dispID= document.getElementById('result')
    if (trigType == 0 ) {
        dispID.value = Math.sin(dispID.value);
    } else if (trigType == 1) {
        dispID.value = Math.cos(dispID.value);
    } else if (trigType == 2){
        dispID.value = Math.tan(dispID.value);
    }
}
// Solve
function Solve(){
    var dispID= document.getElementById('result')
    dispID.value = eval(dispID.value);
}
