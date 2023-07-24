// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;

// contagem de tentativas
function submit()
{
    document.getElementById("guessField");
}
// até acerto    
  
// função para o número enviado pelo usuário

var x = document.getElementById("guessField").value;
    
if (x == y)
{
 alert("Parabéns!!"+playername+", você acertou em "
 + guess + "tentativas! ");

 guess= 1;

}
else if(x > y)
{
    guess++;
    alert("Opa, resposta errada!! Tente um número menor");
}
else
{
    guess++
    alert("Opa, resposta errada!! Tente um número maior");
}
function playAgain(){
    y = Math.floor(Math.random()* 10 + 1);
}