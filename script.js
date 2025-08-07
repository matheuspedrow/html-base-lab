// Função genérica para executar exercícios
function executarExercicio(numero) {
    const codigo = document.getElementById('exercicio' + numero).value;
    document.getElementById('resultado' + numero).innerHTML = codigo;
}

// Configurar funções para cada exercício
for (let i = 1; i <= 20; i++) {
    window['executarExercicio' + i] = function() {
        executarExercicio(i);
    };
}

// Exemplos e dicas iniciais para cada exercício
const exemplosIniciais = {
    1: '<!-- Digite um parágrafo aqui. Exemplo: <p>Olá, Mundo!</p> -->',
    2: '<!-- Digite seus títulos aqui. Exemplo:\n<h1>Título Principal</h1>\n<h2>Subtítulo</h2> -->',
    3: '<!-- Digite seu link aqui. Exemplo: <a href="https://www.google.com" target="_blank">Visite o Google</a> -->',
    4: '<!-- Digite sua lista aqui. Exemplo:\n<ul>\n  <li>Maçã</li>\n  <li>Banana</li>\n  <li>Laranja</li>\n</ul> -->',
    5: '<!-- Digite o código da imagem aqui. Exemplo:\n<img src="https://picsum.photos/200/300" alt="Imagem de exemplo"> -->',
    6: '<!-- Digite o formulário aqui. Exemplo:\n<form>\n  <input type="text" placeholder="Nome">\n  <input type="email" placeholder="Email">\n  <textarea placeholder="Mensagem"></textarea>\n</form> -->',
    7: '<!-- Digite o parágrafo estilizado aqui. Exemplo:\n<p style="color: blue; font-size: 20px;">Texto colorido e grande</p> -->',
    8: '<!-- Digite a tabela aqui. Exemplo:\n<table border="1">\n  <tr>\n    <td>Célula 1</td>\n    <td>Célula 2</td>\n    <td>Célula 3</td>\n  </tr>\n  <tr>\n    <td>Célula 4</td>\n    <td>Célula 5</td>\n    <td>Célula 6</td>\n  </tr>\n</table> -->',
    9: '<!-- Digite as divs e spans aqui. Exemplo:\n<div style="background-color: yellow; padding: 10px;">\n  Texto normal e <span style="color: red;">texto vermelho</span>\n</div> -->',
    10: '<!-- Digite o cartão de perfil aqui. Exemplo:\n<div style="border: 1px solid #ccc; padding: 10px; width: 200px;">\n  <img src="https://picsum.photos/100/100" alt="Foto de perfil">\n  <h2>Nome do Perfil</h2>\n  <p>Descrição breve do perfil</p>\n  <ul>\n    <li>Informação 1</li>\n    <li>Informação 2</li>\n  </ul>\n</div> -->',
    11: '<!-- Digite a lista ordenada aqui. Exemplo:\n<ol>\n  <li>Matrix</li>\n  <li>Inception</li>\n  <li>Interstellar</li>\n</ol> -->',
    12: '<!-- Digite o poema aqui. Exemplo:\n<p>\nRosas são vermelhas<br>\nVioletas são azuis<br>\nHTML é incrível<br>\nE você também é!\n</p> -->',
    13: '<!-- Digite os parágrafos com linha horizontal aqui. Exemplo:\n<p>Primeiro parágrafo com um texto interessante.</p>\n<hr>\n<p>Segundo parágrafo com outro texto legal.</p> -->',
    14: '<!-- Digite o formulário de login aqui. Exemplo:\n<form>\n  <input type="text" placeholder="Usuário"><br>\n  <input type="password" placeholder="Senha"><br>\n  <button type="submit">Entrar</button>\n</form> -->',
    15: '<!-- Digite a tabela com cabeçalho aqui. Exemplo:\n<table border="1">\n  <tr>\n    <th>Nome</th>\n    <th>Preço</th>\n    <th>Quantidade</th>\n  </tr>\n  <tr>\n    <td>Produto 1</td>\n    <td>R$ 10,00</td>\n    <td>5</td>\n  </tr>\n</table> -->',
    16: '<!-- Digite o texto com ênfase aqui. Exemplo:\n<p>Este é um texto <em>muito importante</em> que precisa de <strong>bastante atenção</strong>!</p> -->',
    17: '<!-- Digite o menu de navegação aqui. Exemplo:\n<nav>\n  <ul>\n    <li><a href="#inicio">Início</a></li>\n    <li><a href="#sobre">Sobre</a></li>\n    <li><a href="#contato">Contato</a></li>\n  </ul>\n</nav> -->',
    18: '<!-- Digite a galeria aqui. Exemplo:\n<div style="text-align: center;">\n  <div style="display: inline-block; margin: 10px;">\n    <img src="https://picsum.photos/200/200" alt="Imagem 1">\n  </div>\n  <div style="display: inline-block; margin: 10px;">\n    <img src="https://picsum.photos/200/200" alt="Imagem 2">\n  </div>\n  <div style="display: inline-block; margin: 10px;">\n    <img src="https://picsum.photos/200/200" alt="Imagem 3">\n  </div>\n</div> -->',
    19: '<!-- Digite a citação aqui. Exemplo:\n<blockquote>\n  <p>A imaginação é mais importante que o conhecimento.</p>\n  <cite>Albert Einstein</cite>\n</blockquote> -->',
    20: '<!-- Digite o mini site aqui. Exemplo:\n<header style="background-color: #f0f0f0; padding: 10px;">\n  <h1>Meu Site</h1>\n</header>\n<nav style="background-color: #e0e0e0; padding: 10px;">\n  <a href="#home">Home</a> |\n  <a href="#sobre">Sobre</a> |\n  <a href="#contato">Contato</a>\n</nav>\n<main style="padding: 20px;">\n  <h2>Bem-vindo!</h2>\n  <p>Este é o conteúdo principal do site.</p>\n</main>\n<footer style="background-color: #f0f0f0; padding: 10px; text-align: center;">\n  &copy; 2024 Meu Site\n</footer> -->'
};

// Função para controlar as abas
function inicializarAbas() {
    // Esconder todas as abas primeiro
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Mostrar a primeira aba por padrão
    document.getElementById('teoria').style.display = 'block';

    // Adicionar evento de clique aos botões das abas
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            // Esconder todas as abas
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = 'none';
            });

            // Remover classe ativa de todos os botões
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Mostrar a aba selecionada
            const abaId = this.getAttribute('data-aba');
            document.getElementById(abaId).style.display = 'block';
            
            // Adicionar classe ativa ao botão clicado
            this.classList.add('active');
        });
    });
}

// Função para inicializar os exemplos quando a página carregar
window.onload = function() {
    // Adicionar exemplos iniciais nos textareas
    Object.keys(exemplosIniciais).forEach(numero => {
        document.getElementById('exercicio' + numero).value = exemplosIniciais[numero];
    });

    // Inicializar o sistema de abas
    inicializarAbas();
};