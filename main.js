nomedoestudanteArray = [];

function enviar() {
  var name1 = document.getElementById("nomedoestudante1").value;
  var name2 = document.getElementById("nomedoestudante2").value;
  var name3 = document.getElementById("nomedoestudante3").value;
  var name4 = document.getElementById("nomedoestudante4").value;

  nomedoestudanteArray.push(name1);
  nomedoestudanteArray.push(name2);
  nomedoestudanteArray.push(name3);
  nomedoestudanteArray.push(name4);

  console.log(nomedoestudanteArray);

  document.getElementById("mostrarnomes").innerHTML = nomedoestudanteArray;
  document.getElementById("botaoenviar").style.display = "none";
  document.getElementById("botaoOrganizar").style.display = "inline-block";
}

function organizar() {
  nomedoestudanteArray.sort();
  console.log(nomedoestudanteArray);
  document.getElementById("mostrarnomes").innerHTML = nomedoestudanteArray;
}
