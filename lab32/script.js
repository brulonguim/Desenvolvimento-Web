function calcularPontuacao() {
    let pontuacao = 0;
  
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    
  
    if (q1) pontuacao += parseInt(q1.value);
    if (q2) pontuacao += parseInt(q2.value);
    if (q3) pontuacao += parseInt(q3.value);
    if (q4) pontuacao += parseInt(q4.value);
    if (q5) pontuacao += parseInt(q5.value);
    
  
    document.getElementById("resultado").innerHTML = "Você acertou " + pontuacao + " de 4 perguntas.";
  }
  
  
  