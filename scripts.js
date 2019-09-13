var y = Math.floor(Math.random() * 10 +1);

var guess = 1;

document.getElementById("guessSubmit").onclick = function(){

  var x = document.getElementById("guessField").value;

  if(x == y)

  {
    alert("You've won!");
  }

  else if (x>y)
  {
    guess++;
    alert("Oops sorry. Try a smaller number!")
  }
  else
  {
    guess++;
    alert("Oops sorry. Try a greater number!")

  }
}
