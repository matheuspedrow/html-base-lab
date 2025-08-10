// Dicas e exemplos específicos para cada exercício
const exerciseHelp = {
  1: {
    title: "Criando Parágrafos",
    tips: [
      "Use a tag <p> para criar parágrafos",
      "Não esqueça de fechar a tag com </p>",
      "Você pode criar vários parágrafos seguidos",
    ],
    example: `<p>Olá, Mundo!</p>`,
  },
  2: {
    title: "Trabalhando com Títulos",
    tips: [
      "h1 é o título mais importante",
      "Use h2 para subtítulos",
      "A hierarquia vai de h1 até h6",
    ],
    example: `<h1>Meu Título Principal</h1>
<h2>Subtítulo Importante</h2>`,
  },
  3: {
    title: "Criando Links",
    tips: [
      "Use a tag <a> com href para o destino",
      "target='_blank' abre em nova aba",
      "O texto entre as tags é o que aparece",
    ],
    example: `<a href="https://www.google.com" target="_blank">Visite o Google</a>`,
  },
  4: {
    title: "Listas Não Ordenadas",
    tips: [
      "Use <ul> para a lista",
      "Cada item usa <li>",
      "Você pode ter quantos itens quiser",
    ],
    example: `<ul>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Laranja</li>
</ul>`,
  },
  5: {
    title: "Inserindo Imagens",
    tips: [
      "Use a tag <img>",
      "src='' para o caminho da imagem",
      "alt='' para descrição (importante!)",
    ],
    example: `<img src="https://picsum.photos/200/300" alt="Imagem de exemplo">`,
  },
  6: {
    title: "Criando Formulários",
    tips: [
      "Use <form> para envolver os campos",
      "Cada campo pode ter placeholder",
      "Use textarea para textos longos",
    ],
    example: `<form>
  <input type="text" placeholder="Seu nome">
  <input type="email" placeholder="Seu email">
  <textarea placeholder="Sua mensagem"></textarea>
</form>`,
  },
  7: {
    title: "Estilização Inline",
    tips: [
      "Use style='' dentro das tags",
      "color: define a cor do texto",
      "font-size: define o tamanho da fonte",
    ],
    example: `<p style="color: blue; font-size: 20px;">Texto azul e grande!</p>`,
  },
  8: {
    title: "Criando Tabelas",
    tips: [
      "<table> para a tabela",
      "<tr> para cada linha",
      "<td> para cada célula",
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
</table>`,
  },
  9: {
    title: "Usando Divs e Spans",
    tips: [
      "<div> cria blocos",
      "<span> para texto inline",
      "Use style para cores",
    ],
    example: `<div style="background-color: yellow; padding: 10px;">
  Texto normal e <span style="color: red;">texto vermelho</span>
</div>`,
  },
  10: {
    title: "Cartão de Perfil",
    tips: [
      "Combine várias tags",
      "Use div para agrupar",
      "Adicione estilo para layout",
    ],
    example: `<div style="border: 1px solid #ccc; padding: 10px; width: 200px;">
  <img src="https://picsum.photos/100/100" alt="Foto de perfil">
  <h2>João Silva</h2>
  <p>Desenvolvedor Web</p>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</div>`,
  },
  11: {
    title: "Lista Ordenada",
    tips: [
      "Use <ol> para lista numerada",
      "Cada item ainda usa <li>",
      "Números aparecem automaticamente",
    ],
    example: `<ol>
  <li>Matrix</li>
  <li>Inception</li>
  <li>Interstellar</li>
</ol>`,
  },
  12: {
    title: "Quebras de Linha",
    tips: [
      "<br> quebra a linha",
      "Use dentro de parágrafos",
      "Não precisa fechar <br>",
    ],
    example: `<p>
Rosas são vermelhas<br>
Violetas são azuis<br>
HTML é incrível<br>
E você também é!
</p>`,
  },
  13: {
    title: "Linha Horizontal",
    tips: [
      "Use <hr> para linha horizontal",
      "Separa seções de conteúdo",
      "Não precisa fechar <hr>",
    ],
    example: `<p>Primeiro parágrafo com um texto interessante.</p>
<hr>
<p>Segundo parágrafo com outro texto legal.</p>`,
  },
  14: {
    title: "Formulário de Login",
    tips: [
      "Use type='password' para senha",
      "Adicione labels para acessibilidade",
      "Use button type='submit'",
    ],
    example: `<form>
  <input type="text" placeholder="Usuário"><br>
  <input type="password" placeholder="Senha"><br>
  <button type="submit">Entrar</button>
</form>`,
  },
  15: {
    title: "Tabela com Cabeçalho",
    tips: [
      "Use <th> para cabeçalhos",
      "Coloque na primeira linha",
      "Cabeçalhos ficam em negrito",
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
</table>`,
  },
  16: {
    title: "Texto com Ênfase",
    tips: [
      "<strong> para negrito",
      "<em> para itálico",
      "Combine as duas tags",
    ],
    example: `<p>Este é um texto <em>muito importante</em> que precisa de <strong>bastante atenção</strong>!</p>`,
  },
  17: {
    title: "Menu de Navegação",
    tips: [
      "Use <nav> para navegação",
      "Combine com <ul> e <li>",
      "Cada link vai em um <li>",
    ],
    example: `<nav>
  <ul>
    <li><a href="#inicio">Início</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>`,
  },
  18: {
    title: "Galeria de Imagens",
    tips: [
      "Use div para cada imagem",
      "display: inline-block para lado a lado",
      "Adicione margem entre as imagens",
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
</div>`,
  },
  19: {
    title: "Citações",
    tips: [
      "<blockquote> para citações longas",
      "<cite> para o autor",
      "Use dentro do blockquote",
    ],
    example: `<blockquote>
  <p>A imaginação é mais importante que o conhecimento.</p>
  <cite>Albert Einstein</cite>
</blockquote>`,
  },
  20: {
    title: "Mini Site Completo",
    tips: [
      "Use <header> para cabeçalho",
      "<nav> para navegação",
      "<main> para conteúdo principal",
      "<footer> para rodapé",
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
</footer>`,
  },
};

// Função para atualizar o painel de ajuda
function atualizarPainelAjuda(numero) {
  const helpPanel = document.getElementById("current-exercise-help");
  const help = exerciseHelp[numero] || {
    title: `Exercício ${numero}`,
    tips: ["Selecione um exercício para ver dicas específicas"],
    example: "// Exemplo será mostrado aqui",
  };

  helpPanel.innerHTML = `
        <h4>📝 ${help.title}</h4>
        <div class="example-card">
            <h5>✨ Dicas:</h5>
            <ul class="help-tips">
                ${help.tips.map((tip) => `<li>${tip}</li>`).join("")}
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
    if (
      textarea &&
      textarea.value.trim() !== "" &&
      textarea.value !== exemplosIniciais[i]
    ) {
      completed++;
    }
  }

  const progressBar = document.getElementById("progress-bar-fill");
  const progressText = document.getElementById("progress-text");
  const percentage = (completed / total) * 100;

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completed} de ${total} exercícios completados`;
}

// -----------------------------
// Persistência com localStorage
// -----------------------------

const STORAGE_PREFIX = "htmlBase";
const storageKey = (subkey) => `${STORAGE_PREFIX}:${subkey}`;
const keyAnswer = (n) => storageKey(`answer:${n}`);
const keyResult = (n) => storageKey(`result:${n}`);
const keyActiveTab = () => storageKey("activeTab");

function salvarResposta(numero, valor) {
  try {
    localStorage.setItem(keyAnswer(numero), valor);
  } catch (_) {}
}

function carregarResposta(numero) {
  try {
    return localStorage.getItem(keyAnswer(numero));
  } catch (_) {
    return null;
  }
}

function salvarResultado(numero, html) {
  try {
    localStorage.setItem(keyResult(numero), html);
  } catch (_) {}
}

function carregarResultado(numero) {
  try {
    return localStorage.getItem(keyResult(numero));
  } catch (_) {
    return null;
  }
}

function salvarAbaAtiva(abaId) {
  try {
    localStorage.setItem(keyActiveTab(), abaId);
  } catch (_) {}
}

function carregarAbaAtiva() {
  try {
    return localStorage.getItem(keyActiveTab());
  } catch (_) {
    return null;
  }
}

// Função genérica para executar exercícios
function executarExercicio(numero) {
  const codigo = document.getElementById("exercicio" + numero).value;
  document.getElementById("resultado" + numero).innerHTML = codigo;
  salvarResposta(numero, codigo);
  salvarResultado(numero, codigo);
  atualizarProgresso();
}

// Configurar funções para cada exercício
for (let i = 1; i <= 20; i++) {
  const textArea = document.getElementById("exercicio" + i);
  if (textArea) {
    // Atualizar ao clicar no botão
    window["executarExercicio" + i] = function () {
      executarExercicio(i);
    };

    // Atualizar o painel de ajuda quando o textarea recebe foco
    textArea.addEventListener("focus", function () {
      atualizarPainelAjuda(i);
    });

    // Atualizar o painel de ajuda quando clicar no botão executar
    const button = textArea.parentElement.querySelector("button");
    if (button) {
      button.addEventListener("click", function () {
        atualizarPainelAjuda(i);
      });
    }

    // Salvar automaticamente no localStorage ao digitar
    textArea.addEventListener("input", function () {
      salvarResposta(i, textArea.value);
      atualizarProgresso();
    });

    // ------- Extensões: Checar e Mostrar Resposta (HTML) -------
    // Injetar botões e áreas auxiliares
    const codigoDiv = textArea.parentElement;
    const execBtn = codigoDiv.querySelector("button");
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Checar";
    checkBtn.id = `html-check-${i}`;
    const showBtn = document.createElement("button");
    showBtn.textContent = "Mostrar resposta";
    showBtn.id = `html-show-${i}`;
    const useBtn = document.createElement("button");
    useBtn.textContent = "Usar resposta no editor";
    useBtn.id = `html-use-${i}`;
    useBtn.style.display = "none";
    const solutionDiv = document.createElement("div");
    solutionDiv.id = `html-solution-${i}`;
    solutionDiv.style.display = "none";
    solutionDiv.style.marginTop = "10px";
    const solutionPre = document.createElement("pre");
    solutionPre.className = "codigo-exemplo";
    solutionPre.id = `html-solution-pre-${i}`;
    solutionDiv.appendChild(solutionPre);
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = "dica";
    feedbackDiv.id = `html-feedback-${i}`;
    feedbackDiv.style.display = "none";

    // Inserir após o botão Executar
    if (execBtn && execBtn.nextSibling) {
      codigoDiv.insertBefore(checkBtn, execBtn.nextSibling);
      codigoDiv.insertBefore(showBtn, checkBtn.nextSibling);
      codigoDiv.insertBefore(useBtn, showBtn.nextSibling);
    } else {
      codigoDiv.appendChild(checkBtn);
      codigoDiv.appendChild(showBtn);
      codigoDiv.appendChild(useBtn);
    }
    // Inserir áreas antes do resultado
    const resultadoDiv = codigoDiv.querySelector(".resultado");
    if (resultadoDiv) {
      codigoDiv.insertBefore(solutionDiv, resultadoDiv);
      codigoDiv.insertBefore(feedbackDiv, resultadoDiv);
    } else {
      codigoDiv.appendChild(solutionDiv);
      codigoDiv.appendChild(feedbackDiv);
    }

    // Eventos
    checkBtn.addEventListener("click", function () {
      const ok = validarExercicioHTML(i, textArea.value || "");
      feedbackDiv.style.display = "block";
      const tips =
        exerciseHelp[i] && exerciseHelp[i].tips ? exerciseHelp[i].tips : [];
      const dica = tips.length ? `\nDica: ${tips[0]}` : "";
      feedbackDiv.textContent = ok
        ? "✅ Passou nos critérios básicos!"
        : "❌ Ainda não está de acordo. Revise as instruções." + dica;
      feedbackDiv.style.backgroundColor = ok ? "#e8f5e9" : "#ffebee";
    });

    showBtn.addEventListener("click", function () {
      const hidden = solutionDiv.style.display === "none";
      if (hidden) {
        const sol =
          exerciseHelp[i] && exerciseHelp[i].example
            ? exerciseHelp[i].example
            : "";
        solutionPre.textContent = sol;
        solutionDiv.style.display = "block";
        useBtn.style.display = "inline-block";
        showBtn.textContent = "Ocultar resposta";
      } else {
        solutionDiv.style.display = "none";
        useBtn.style.display = "none";
        showBtn.textContent = "Mostrar resposta";
      }
    });

    useBtn.addEventListener("click", function () {
      const sol =
        exerciseHelp[i] && exerciseHelp[i].example
          ? exerciseHelp[i].example
          : "";
      textArea.value = sol;
      salvarResposta(i, sol);
      executarExercicio(i);
      feedbackDiv.style.display = "none";
    });
  }
}

// Exemplos e dicas iniciais para cada exercício
const exemplosIniciais = {
  1: "<!-- Digite um parágrafo aqui. Exemplo: <p>Olá, Mundo!</p> -->",
  2: "<!-- Digite seus títulos aqui. Exemplo:\n<h1>Título Principal</h1>\n<h2>Subtítulo</h2> -->",
  3: '<!-- Digite seu link aqui. Exemplo: <a href="https://www.google.com" target="_blank">Visite o Google</a> -->',
  4: "<!-- Digite sua lista aqui. Exemplo:\n<ul>\n  <li>Maçã</li>\n  <li>Banana</li>\n  <li>Laranja</li>\n</ul> -->",
  5: '<!-- Digite o código da imagem aqui. Exemplo:\n<img src="https://picsum.photos/200/300" alt="Imagem de exemplo"> -->',
  6: '<!-- Digite o formulário aqui. Exemplo:\n<form>\n  <input type="text" placeholder="Nome">\n  <input type="email" placeholder="Email">\n  <textarea placeholder="Mensagem"></textarea>\n</form> -->',
  7: '<!-- Digite o parágrafo estilizado aqui. Exemplo:\n<p style="color: blue; font-size: 20px;">Texto colorido e grande</p> -->',
  8: '<!-- Digite a tabela aqui. Exemplo:\n<table border="1">\n  <tr>\n    <td>Célula 1</td>\n    <td>Célula 2</td>\n    <td>Célula 3</td>\n  </tr>\n  <tr>\n    <td>Célula 4</td>\n    <td>Célula 5</td>\n    <td>Célula 6</td>\n  </tr>\n</table> -->',
  9: '<!-- Digite as divs e spans aqui. Exemplo:\n<div style="background-color: yellow; padding: 10px;">\n  Texto normal e <span style="color: red;">texto vermelho</span>\n</div> -->',
  10: '<!-- Digite o cartão de perfil aqui. Exemplo:\n<div style="border: 1px solid #ccc; padding: 10px; width: 200px;">\n  <img src="https://picsum.photos/100/100" alt="Foto de perfil">\n  <h2>Nome do Perfil</h2>\n  <p>Descrição breve do perfil</p>\n  <ul>\n    <li>Informação 1</li>\n    <li>Informação 2</li>\n  </ul>\n</div> -->',
  11: "<!-- Digite a lista ordenada aqui. Exemplo:\n<ol>\n  <li>Matrix</li>\n  <li>Inception</li>\n  <li>Interstellar</li>\n</ol> -->",
  12: "<!-- Digite o poema aqui. Exemplo:\n<p>\nRosas são vermelhas<br>\nVioletas são azuis<br>\nHTML é incrível<br>\nE você também é!\n</p> -->",
  13: "<!-- Digite os parágrafos com linha horizontal aqui. Exemplo:\n<p>Primeiro parágrafo com um texto interessante.</p>\n<hr>\n<p>Segundo parágrafo com outro texto legal.</p> -->",
  14: '<!-- Digite o formulário de login aqui. Exemplo:\n<form>\n  <input type="text" placeholder="Usuário"><br>\n  <input type="password" placeholder="Senha"><br>\n  <button type="submit">Entrar</button>\n</form> -->',
  15: '<!-- Digite a tabela com cabeçalho aqui. Exemplo:\n<table border="1">\n  <tr>\n    <th>Nome</th>\n    <th>Preço</th>\n    <th>Quantidade</th>\n  </tr>\n  <tr>\n    <td>Produto 1</td>\n    <td>R$ 10,00</td>\n    <td>5</td>\n  </tr>\n</table> -->',
  16: "<!-- Digite o texto com ênfase aqui. Exemplo:\n<p>Este é um texto <em>muito importante</em> que precisa de <strong>bastante atenção</strong>!</p> -->",
  17: '<!-- Digite o menu de navegação aqui. Exemplo:\n<nav>\n  <ul>\n    <li><a href="#inicio">Início</a></li>\n    <li><a href="#sobre">Sobre</a></li>\n    <li><a href="#contato">Contato</a></li>\n  </ul>\n</nav> -->',
  18: '<!-- Digite a galeria aqui. Exemplo:\n<div style="text-align: center;">\n  <div style="display: inline-block; margin: 10px;">\n    <img src="https://picsum.photos/200/200" alt="Imagem 1">\n  </div>\n  <div style="display: inline-block; margin: 10px;">\n    <img src="https://picsum.photos/200/200" alt="Imagem 2">\n  </div>\n  <div style="display: inline-block; margin: 10px;">\n    <img src="https://picsum.photos/200/200" alt="Imagem 3">\n  </div>\n</div> -->',
  19: "<!-- Digite a citação aqui. Exemplo:\n<blockquote>\n  <p>A imaginação é mais importante que o conhecimento.</p>\n  <cite>Albert Einstein</cite>\n</blockquote> -->",
  20: '<!-- Digite o mini site aqui. Exemplo:\n<header style="background-color: #f0f0f0; padding: 10px;">\n  <h1>Meu Site</h1>\n</header>\n<nav style="background-color: #e0e0e0; padding: 10px;">\n  <a href="#home">Home</a> |\n  <a href="#sobre">Sobre</a> |\n  <a href="#contato">Contato</a>\n</nav>\n<main style="padding: 20px;">\n  <h2>Bem-vindo!</h2>\n  <p>Este é o conteúdo principal do site.</p>\n</main>\n<footer style="background-color: #f0f0f0; padding: 10px; text-align: center;">\n  &copy; 2024 Meu Site\n</footer> -->',
};
// Validadores HTML devem vir antes do uso
const validadoresHTML = {
  1: (root) => root.querySelectorAll("p").length >= 1,
  2: (root) => root.querySelector("h1") && root.querySelector("h2"),
  3: (root) => {
    const a = root.querySelector("a[href]");
    if (!a) return false;
    return a.getAttribute("target") === "_blank";
  },
  4: (root) => {
    const ul = root.querySelector("ul");
    return !!ul && ul.querySelectorAll("li").length >= 3;
  },
  5: (root) => {
    const img = root.querySelector("img[src]");
    return !!img && img.hasAttribute("alt");
  },
  6: (root) =>
    root.querySelector("form") &&
    root.querySelector("textarea") &&
    root.querySelectorAll("input").length >= 2,
  7: (root) => {
    return Array.from(root.querySelectorAll("*")).some(
      (el) =>
        ((el.getAttribute && el.getAttribute("style")) || "").match(
          /color\s*:/i,
        ) && (el.getAttribute("style") || "").match(/font-size\s*:/i),
    );
  },
  8: (root) => {
    const table = root.querySelector("table");
    if (!table) return false;
    const rows = table.querySelectorAll("tr");
    return rows.length >= 2 && rows[0].querySelectorAll("td,th").length >= 3;
  },
  9: (root) => root.querySelector("div") && root.querySelector("span"),
  10: (root) =>
    root.querySelector("img") &&
    (root.querySelector("h1, h2") || root.querySelector("p")) &&
    root.querySelector("ul, ol"),
  11: (root) => {
    const ol = root.querySelector("ol");
    return !!ol && ol.querySelectorAll("li").length >= 3;
  },
  12: (root) => root.querySelector("br"),
  13: (root) => root.querySelector("hr"),
  14: (root) => root.querySelector('input[type="password"]'),
  15: (root) => root.querySelector("table th") !== null,
  16: (root) => root.querySelector("em") && root.querySelector("strong"),
  17: (root) =>
    (root.querySelector("nav") || root.querySelector("ul")) &&
    root.querySelector("li a"),
  18: (root) => root.querySelectorAll("img").length >= 3,
  19: (root) => root.querySelector("blockquote") && root.querySelector("cite"),
  20: (root) =>
    root.querySelector("header") &&
    root.querySelector("nav") &&
    root.querySelector("main") &&
    root.querySelector("footer"),
};

function validarExercicioHTML(numero, htmlUsuario) {
  const container = document.createElement("div");
  container.innerHTML = htmlUsuario || "";
  const val = validadoresHTML[numero];
  if (!val) return false;
  try {
    return !!val(container);
  } catch (_) {
    return false;
  }
}

// Função para controlar as abas
function inicializarAbas() {
  // Esconder todas as abas primeiro
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.style.display = "none";
  });

  // Mostrar a última aba ativa (ou a primeira por padrão)
  const ultimaAba = carregarAbaAtiva();
  const abaInicial =
    ultimaAba && document.getElementById(ultimaAba) ? ultimaAba : "teoria";
  const elAbaInicial = document.getElementById(abaInicial);
  if (elAbaInicial) elAbaInicial.style.display = "block";
  // Marcar botão ativo correspondente
  const botaoInicial = document.querySelector(
    `.tab-button[data-aba="${abaInicial}"]`,
  );
  if (botaoInicial) botaoInicial.classList.add("active");

  // Adicionar evento de clique aos botões das abas
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", function () {
      // Esconder todas as abas
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.style.display = "none";
      });

      // Remover classe ativa de todos os botões
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Mostrar a aba selecionada
      const abaId = this.getAttribute("data-aba");
      document.getElementById(abaId).style.display = "block";

      // Adicionar classe ativa ao botão clicado
      this.classList.add("active");

      // Persistir aba ativa
      salvarAbaAtiva(abaId);
    });
  });
}

// Função para inicializar os exemplos quando a página carregar
window.onload = function () {
  // Restaurar respostas salvas ou aplicar exemplos iniciais
  Object.keys(exemplosIniciais).forEach((numeroStr) => {
    const numero = Number(numeroStr);
    const el = document.getElementById("exercicio" + numero);
    if (!el) return;
    const salvo = carregarResposta(numero);
    // Início limpo: não preencher com exemplos comentados
    el.value = salvo !== null ? salvo : "";
    // Restaurar resultado salvo (opcional)
    const res = document.getElementById("resultado" + numero);
    const salvoResultado = carregarResultado(numero);
    if (res && salvoResultado !== null) {
      res.innerHTML = salvoResultado;
    }
  });

  // Inicializar o sistema de abas
  inicializarAbas();

  // Atualizar progresso inicial
  atualizarProgresso();

  // Preparar aba CSS (lazy init ao clicar)
  const btnCss = document.querySelector(
    '.tab-button[data-aba="exercicios-css"]',
  );
  if (btnCss) {
    let loaded = false;
    btnCss.addEventListener("click", function () {
      if (loaded) return;
      initCssExercicios();
      loaded = true;
    });
  }
};

// ==============================
// CSS: exercícios + validação
// ==============================

const cssExercicios = [
  {
    id: 1,
    titulo: "Seletores básicos",
    descricao:
      "Altere a cor dos parágrafos para azul e aumente o tamanho do h3.",
    html: `<h3>Título</h3><p>Parágrafo 1</p><p>Parágrafo 2</p>`,
    exemploCss: `p { color: blue; }\nh3 { font-size: 28px; }`,
    hint: "Use seletores de elemento: p { ... } e h3 { ... }",
    validar: (doc) => {
      const p = doc.querySelector("p");
      const h3 = doc.querySelector("h3");
      if (!p || !h3) return false;
      const cp = doc.defaultView.getComputedStyle(p).color;
      const fs = parseFloat(doc.defaultView.getComputedStyle(h3).fontSize);
      return (cp === "rgb(0, 0, 255)" || cp.includes("blue")) && fs >= 26;
    },
  },
  {
    id: 2,
    titulo: "Classes e IDs",
    descricao: "Estilize .destaque com fundo claro e #unico com cor vermelha.",
    html: `<p class="destaque">Destaque</p><p id="unico">Único</p>`,
    exemploCss: `.destaque { background: #fffae6; padding: 6px; }\n#unico { color: crimson; }`,
    hint: "Lembre: .classe seleciona por classe e #id seleciona um único elemento",
    validar: (doc) => {
      const destaque = doc.querySelector(".destaque");
      const unico = doc.getElementById("unico");
      if (!destaque || !unico) return false;
      const bg = doc.defaultView.getComputedStyle(destaque).backgroundColor;
      const color = doc.defaultView.getComputedStyle(unico).color;
      return (
        bg !== "rgba(0, 0, 0, 0)" &&
        (color.includes("crimson") || color === "rgb(220, 20, 60)")
      );
    },
  },
  {
    id: 3,
    titulo: "Box Model",
    descricao: "Crie uma caixa com padding, margem e borda arredondada.",
    html: `<div class="caixa">Sou uma caixa</div>`,
    exemploCss: `.caixa { padding: 16px; margin: 12px; border: 2px solid #4CAF50; border-radius: 8px; }`,
    hint: "Trabalhe em .caixa adicionando padding, margin, border e border-radius",
    validar: (doc) => {
      const caixa = doc.querySelector(".caixa");
      if (!caixa) return false;
      const cs = doc.defaultView.getComputedStyle(caixa);
      return (
        parseFloat(cs.paddingTop) >= 10 &&
        parseFloat(cs.marginTop) >= 10 &&
        parseFloat(cs.borderTopWidth) >= 1
      );
    },
  },
  {
    id: 4,
    titulo: "Flexbox",
    descricao: "Use display:flex para alinhar itens com gap.",
    html: `<div class="container"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`,
    exemploCss: `.container { display: flex; gap: 8px; }\n.item { background:#e3f2fd; padding:10px; border-radius:6px; }`,
    hint: "Aplique display:flex em .container e use gap para espaçamento",
    validar: (doc) => {
      const c = doc.querySelector(".container");
      if (!c) return false;
      const disp = doc.defaultView.getComputedStyle(c).display;
      return disp === "flex";
    },
  },
  {
    id: 5,
    titulo: "Pseudo-classes",
    descricao: "Adicione :hover no botão com transformação suave.",
    html: `<button class="botao">Passe o mouse</button>`,
    exemploCss: `.botao { transition: transform .2s ease; }\n.botao:hover { transform: scale(1.05); }`,
    hint: "Defina .botao e adicione :hover com transform e transition",
    validar: (doc) => {
      const btn = doc.querySelector(".botao");
      if (!btn) return false;
      const cs = doc.defaultView.getComputedStyle(btn);
      return (
        cs.transitionProperty.includes("transform") ||
        cs.transitionDuration !== "0s"
      );
    },
  },
  {
    id: 6,
    titulo: "Responsividade (media query)",
    descricao:
      "No mobile (<= 480px), faça o card ocupar 100% com padding maior.",
    html: `<div class="card">Sou um card</div>`,
    exemploCss: `.card { width: 400px; padding: 12px; background:#fff; border-radius:8px; }\n@media (max-width: 480px) { .card { width: 100%; padding: 18px; } }`,
    hint: "Crie uma @media (max-width: 480px) ajustando width e padding de .card",
    validar: (doc) => {
      const card = doc.querySelector(".card");
      if (!card) return false;
      const styles = Array.from(doc.querySelectorAll("style"))
        .map((s) => s.textContent)
        .join("\n");
      return styles.includes("@media (max-width: 480px)");
    },
  },
];

function criarExercicioCss(ex) {
  const container = document.createElement("div");
  container.className = "secao";
  container.innerHTML = `
        <h2>CSS ${ex.id}: ${ex.titulo}</h2>
        <div class="exercicio">
          <p>${ex.descricao}</p>
          <div class="codigo">
            <textarea id="css-exercicio-${ex.id}" placeholder="Digite seu CSS aqui..."></textarea>
            <button id="css-run-${ex.id}">Executar</button>
            <button id="css-check-${ex.id}">Checar</button>
            <button id="css-show-${ex.id}">Mostrar resposta</button>
            <button id="css-use-${ex.id}" style="display:none;">Usar resposta no editor</button>
            <div id="css-solution-${ex.id}" style="display:none; margin-top:10px;">
              <pre class="codigo-exemplo" id="css-solution-pre-${ex.id}"></pre>
            </div>
            <div class="resultado"><iframe id="css-frame-${ex.id}"></iframe></div>
            <div id="css-feedback-${ex.id}" class="dica" style="display:none;"></div>
          </div>
        </div>
    `;
  return container;
}

function escreverPreviewCss(iframe, css, htmlBase) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const page = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      body{font-family: Arial, sans-serif; padding:16px; background:#fafafa}
    </style><style>${css}</style></head><body>${htmlBase}</body></html>`;
  doc.open();
  doc.write(page);
  doc.close();
}

function initCssExercicios() {
  const root = document.getElementById("css-exercises-root");
  if (!root) return;

  cssExercicios.forEach((ex) => {
    const el = criarExercicioCss(ex);
    root.appendChild(el);
    const ta = document.getElementById(`css-exercicio-${ex.id}`);
    const iframe = document.getElementById(`css-frame-${ex.id}`);
    const runBtn = document.getElementById(`css-run-${ex.id}`);
    const checkBtn = document.getElementById(`css-check-${ex.id}`);
    const fb = document.getElementById(`css-feedback-${ex.id}`);
    const showBtn = document.getElementById(`css-show-${ex.id}`);
    const useBtn = document.getElementById(`css-use-${ex.id}`);
    const solutionDiv = document.getElementById(`css-solution-${ex.id}`);
    const solutionPre = document.getElementById(`css-solution-pre-${ex.id}`);

    const salvo = localStorage.getItem(`htmlBase:css:answer:${ex.id}`);
    // Início limpo: vazio se não houver salvo. Mostramos apenas dica.
    ta.value = salvo !== null ? salvo : "";
    escreverPreviewCss(iframe, ta.value, ex.html);

    ta.addEventListener("input", () => {
      localStorage.setItem(`htmlBase:css:answer:${ex.id}`, ta.value);
    });

    runBtn.addEventListener("click", () => {
      escreverPreviewCss(iframe, ta.value, ex.html);
      fb.style.display = "none";
    });

    checkBtn.addEventListener("click", () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const ok = ex.validar(doc);
      fb.style.display = "block";
      const dica = ex.hint ? `\nDica: ${ex.hint}` : "";
      fb.textContent = ok
        ? "✅ Passou nos critérios básicos!"
        : "❌ Ainda não está de acordo. Revise as instruções." + dica;
      fb.style.backgroundColor = ok ? "#e8f5e9" : "#ffebee";
    });

    showBtn.addEventListener("click", () => {
      const isHidden = solutionDiv.style.display === "none";
      if (isHidden) {
        solutionPre.textContent = ex.exemploCss;
        solutionDiv.style.display = "block";
        useBtn.style.display = "inline-block";
        showBtn.textContent = "Ocultar resposta";
      } else {
        solutionDiv.style.display = "none";
        useBtn.style.display = "none";
        showBtn.textContent = "Mostrar resposta";
      }
    });

    useBtn.addEventListener("click", () => {
      ta.value = ex.exemploCss;
      localStorage.setItem(`htmlBase:css:answer:${ex.id}`, ta.value);
      escreverPreviewCss(iframe, ta.value, ex.html);
      fb.style.display = "none";
    });
  });
}
