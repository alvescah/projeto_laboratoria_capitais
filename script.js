// Nome do jogador
function myFunction() {
  let text;
  let person = prompt("Digite seu nome para começar a jogar:", "Player");
    if (person == null || person == "") {
      text = "Olá, Anônimo.";
    } 
    else {
      text = "Olá, " + person + ".";
  }
  document.getElementById("boasvindas").innerHTML = text;
}

// Início do Game
document.getElementById('gabarito').onclick = function() {
    const selected = [];
    const capCazaq = "astana";
    
    for (var option of document.getElementById('capitalcazaq').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    console.log(selected);
  
    if (selected == capCazaq){
      alert("Parabéns, você acertou!");
      
    }
    else{
      alert("Não desista, tente novamente!");
    }
}