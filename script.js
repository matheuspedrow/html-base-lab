// Dicas e exemplos específicos para cada exercício
const exerciseHelp = {
    1: {
        title: "Criando Parágrafos",
        tips: [
            "Use a tag <p> para criar parágrafos",
            "Não esqueça de fechar a tag com </p>",
            "Você pode criar vários parágrafos seguidos"
        ],
        example: `<p>Olá, Mundo!</p>`
    },
    2: {
        title: "Trabalhando com Títulos",
        tips: [
            "h1 é o título mais importante",
            "Use h2 para subtítulos",
            "A hierarquia vai de h1 até h6"
        ],
        example: `<h1>Meu Título Principal</h1>
<h2>Subtítulo Importante</h2>`
    },
    3: {
        title: "Criando Links",
        tips: [
            "Use a tag <a> com href para o destino",
            "target='_blank' abre em nova aba",
            "O texto entre as tags é o que aparece"
        ],
        example: `<a href="https://www.google.com" target="_blank">Visite o Google</a>`
    },
    4: {
        title: "Listas Não Ordenadas",
        tips: [
            "Use <ul> para a lista",
            "Cada item usa <li>",
            "Você pode ter quantos itens quiser"
        ],
        example: `<ul>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Laranja</li>
</ul>`
    },
    5: {
        title: "Inserindo Imagens",
        tips: [
            "Use a tag <img>",
            "src='' para o caminho da imagem",
            "alt='' para descrição (importante!)"
        ],
        example: `<img src="https://picsum.photos/200/300" alt="Imagem de exemplo">`
    },
    6: {
        title: "Criando Formulários",
        tips: [
            "Use <form> para envolver os campos",
            "Cada campo pode ter placeholder",
            "Use textarea para textos longos"
        ],
        example: `<form>
  <input type="text" placeholder="Seu nome">
  <input type="email" placeholder="Seu email">
  <textarea placeholder="Sua mensagem"></textarea>
</form>`
    },
    7: {
        title: "Estilização Inline",
        tips: [
            "Use style='' dentro das tags",
            "color: define a cor do texto",
            "font-size: define o tamanho da fonte"
        ],
        example: `<p style="color: blue; font-size: 20px;">Texto azul e grande!</p>`
    },
    8: {
        title: "Criando Tabelas",
        tips: [
            "<table> para a tabela",
            "<tr> para cada linha",
            "<td> para cada célula"
        ],
        example: `<table border="1">
  <tr>
    <td>Célula 1</td>
    <td>Célula 2</td>
    <td>Célula 3</td>
  </tr>
  <tr>
    <td>Célula 4</td>
    <td>Célula 5</td>
    <td>Célula 6</td>
  </tr>
</table>`
    },
    9: {
        title: "Usando Divs e Spans",
        tips: [
            "<div> cria blocos",
            "<span> para texto inline",
            "Use style para cores"
        ],
        example: `<div style="background-color: yellow; padding: 10px;">
  Texto normal e <span style="color: red;">texto vermelho</span>
</div>`
    },
    10: {
        title: "Cartão de Perfil",
        tips: [
            "Combine várias tags",
            "Use div para agrupar",
            "Adicione estilo para layout"
        ],
        example: `<div style="border: 1px solid #ccc; padding: 10px; width: 200px;">
  <img src="https://picsum.photos/100/100" alt="Foto de perfil">
  <h2>João Silva</h2>
  <p>Desenvolvedor Web</p>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</div>`
    },
    11: {
        title: "Lista Ordenada",
        tips: [
            "Use <ol> para lista numerada",
            "Cada item ainda usa <li>",
            "Números aparecem automaticamente"
        ],
        example: `<ol>
  <li>Matrix</li>
  <li>Inception</li>
  <li>Interstellar</li>
</ol>`
    },
    12: {
        title: "Quebras de Linha",
        tips: [
            "<br> quebra a linha",
            "Use dentro de parágrafos",
            "Não precisa fechar <br>"
        ],
        example: `<p>
Rosas são vermelhas<br>
Violetas são azuis<br>
HTML é incrível<br>
E você também é!
</p>`
    },
    13: {
        title: "Linha Horizontal",
        tips: [
            "Use <hr> para linha horizontal",
            "Separa seções de conteúdo",
            "Não precisa fechar <hr>"
        ],
        example: `<p>Primeiro parágrafo com um texto interessante.</p>
<hr>
<p>Segundo parágrafo com outro texto legal.</p>`
    },
    14: {
        title: "Formulário de Login",
        tips: [
            "Use type='password' para senha",
            "Adicione labels para acessibilidade",
            "Use button type='submit'"
        ],
        example: `<form>
  <input type="text" placeholder="Usuário"><br>
  <input type="password" placeholder="Senha"><br>
  <button type="submit">Entrar</button>
</form>`
    },
    15: {
        title: "Tabela com Cabeçalho",
        tips: [
            "Use <th> para cabeçalhos",
            "Coloque na primeira linha",
            "Cabeçalhos ficam em negrito"
        ],
        example: `<table border="1">
  <tr>
    <th>Nome</th>
    <th>Preço</th>
    <th>Quantidade</th>
  </tr>
  <tr>
    <td>Produto 1</td>
    <td>R$ 10,00</td>
    <td>5</td>
  </tr>
</table>`
    },
    16: {
        title: "Texto com Ênfase",
        tips: [
            "<strong> para negrito",
            "<em> para itálico",
            "Combine as duas tags"
        ],
        example: `<p>Este é um texto <em>muito importante</em> que precisa de <strong>bastante atenção</strong>!</p>`
    },
    17: {
        title: "Menu de Navegação",
        tips: [
            "Use <nav> para navegação",
            "Combine com <ul> e <li>",
            "Cada link vai em um <li>"
        ],
        example: `<nav>
  <ul>
    <li><a href="#inicio">Início</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>`
    },
    18: {
        title: "Galeria de Imagens",
        tips: [
            "Use div para cada imagem",
            "display: inline-block para lado a lado",
            "Adicione margem entre as imagens"
        ],
        example: `<div style="text-align: center;">
  <div style="display: inline-block; margin: 10px;">
    <img src="https://picsum.photos/200/200" alt="Imagem 1">
  </div>
  <div style="display: inline-block; margin: 10px;">
    <img src="https://picsum.photos/200/200" alt="Imagem 2">
  </div>
  <div style="display: inline-block; margin: 10px;">
    <img src="https://picsum.photos/200/200" alt="Imagem 3">
  </div>
</div>`
    },
    19: {
        title: "Citações",
        tips: [
            "<blockquote> para citações longas",
            "<cite> para o autor",
            "Use dentro do blockquote"
        ],
        example: `<blockquote>
  <p>A imaginação é mais importante que o conhecimento.</p>
  <cite>Albert Einstein</cite>
</blockquote>`
    },
    20: {
        title: "Mini Site Completo",
        tips: [
            "Use <header> para cabeçalho",
            "<nav> para navegação",
            "<main> para conteúdo principal",
            "<footer> para rodapé"
        ],
        example: `<header style="background-color: #f0f0f0; padding: 10px;">
  <h1>Meu Site</h1>
</header>
<nav style="background-color: #e0e0e0; padding: 10px;">
  <a href="#home">Home</a> |
  <a href="#sobre">Sobre</a> |
  <a href="#contato">Contato</a>
</nav>
<main style="padding: 20px;">
  <h2>Bem-vindo!</h2>
  <p>Este é o conteúdo principal do site.</p>
</main>
<footer style="background-color: #f0f0f0; padding: 10px; text-align: center;">
  &copy; 2024 Meu Site
</footer>`
    }
};

// Função para atualizar o painel de ajuda
function atualizarPainelAjuda(numero) {
    const helpPanel = document.getElementById('current-exercise-help');
    const help = exerciseHelp[numero] || {
        title: `Exercício ${numero}`,
        tips: ["Selecione um exercício para ver dicas específicas"],
        example: "// Exemplo será mostrado aqui"
    };

    helpPanel.innerHTML = `
        <h4>📝 ${help.title}</h4>
        <div class="example-card">
            <h5>✨ Dicas:</h5>
            <ul class="help-tips">
                ${help.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
            <h5>📝 Exemplo:</h5>
            <pre>${help.example}</pre>
            <div class="result">
                <h5>🎯 Resultado:</h5>
                ${help.example}
            </div>
        </div>
    `;
}

// Função para atualizar a barra de progresso
function atualizarProgresso() {
    const total = 20;
    let completed = 0;
    
    for (let i = 1; i <= total; i++) {
        const textarea = document.getElementById(`exercicio${i}`);
        if (textarea && textarea.value.trim() !== '' && 
            textarea.value !== exemplosIniciais[i]) {
            completed++;
        }
    }

    const progressBar = document.getElementById('progress-bar-fill');
    const progressText = document.getElementById('progress-text');
    const percentage = (completed / total) * 100;
    
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${completed} de ${total} exercícios completados`;
}

// Função genérica para executar exercícios
function executarExercicio(numero) {
    const codigo = document.getElementById('exercicio' + numero).value;
    document.getElementById('resultado' + numero).innerHTML = codigo;
    atualizarProgresso();
}

// Configurar funções para cada exercício
for (let i = 1; i <= 20; i++) {
    const textArea = document.getElementById('exercicio' + i);
    if (textArea) {
        // Atualizar ao clicar no botão
        window['executarExercicio' + i] = function() {
            executarExercicio(i);
        };
        
        // Atualizar o painel de ajuda quando o textarea recebe foco
        textArea.addEventListener('focus', function() {
            atualizarPainelAjuda(i);
        });
        
        // Atualizar o painel de ajuda quando clicar no botão executar
        const button = textArea.parentElement.querySelector('button');
        if (button) {
            button.addEventListener('click', function() {
                atualizarPainelAjuda(i);
            });
        }
    }
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