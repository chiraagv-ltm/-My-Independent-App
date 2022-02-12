var bmi="";

function calculate(){
    bmi=703*(Number(document.getElementById("weight").value)/(Number(document.getElementById("height").value)*Number(document.getElementById("height").value)));
    document.getElementById("output").innerHTML= Math.floor(bmi);
}
