// Funções de acessibilidade
function aumentarFonte() {
    document.body.style.fontSize = "larger";
}

function diminuirFonte() {
    document.body.style.fontSize = "smaller";
}

function altoContraste() {
    const body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "#FDFBF7"; // Branco Linho
        body.style.color = "#4A5759"; // Cinza Eucalipto
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "yellow";
    }
}

// Função do quiz interativo
function avaliarQuiz() {
    const form = document.forms['formQuiz'];
    let pontuacao = 0;

    if (form.fertilizante.value === 'sim') pontuacao += 1;
    if (form.agua.value === 'sim') pontuacao += 1;
    if (form.vegetacao.value === 'sim') pontuacao += 1;
    if (form.compostagem.value === 'sim') pontuacao += 1;
    if (form.energia.value === 'sim') pontuacao += 1;

    const resultado = document.getElementById('resultado');

    if (pontuacao === 5) {
        resultado.textContent = "Parabéns! Seus hábitos são muito sustentáveis!";
    } else if (pontuacao >= 3) {
        resultado.textContent = "Muito bem! Com pequenas melhorias, você pode se tornar ainda mais sustentável.";
    } else {
        resultado.textContent = "Vamos melhorar! Comece adotando práticas mais sustentáveis para o planeta.";
    }
}
