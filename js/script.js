function luas(){
    var s = document.getElementById('sama').value;
    var luas = s*s;
    document.getElementById('luas1').innerHTML = "Luas Persegi adalah "+luas;
}

function kel(){
    var s = document.getElementById('sama').value;
    var kel = 4*s;
    document.getElementById('kel2').innerHTML = "Keliling Persegi adalah "+kel;
}

function clearResult(){
    document.getElementById("sama").value = ''
  }

