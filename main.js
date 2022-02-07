one=document.getElementById("height").value;
two=document.getElementById("weight").value;

function calculate(){
    let bmi = (two / ((one * one) 
    / 10000)).toFixed(2);
    document.getElementById("output").innerHTML= bmi;
}