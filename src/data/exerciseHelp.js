export const exerciseHelp = {
  1: { title: 'Criando Parágrafos', tips: ['Use a tag <p> para criar parágrafos','Não esqueça de fechar a tag com </p>','Você pode criar vários parágrafos seguidos'], example: `<p>Olá, Mundo!</p>` },
  2: { title: 'Trabalhando com Títulos', tips: ['h1 é o título mais importante','Use h2 para subtítulos','A hierarquia vai de h1 até h6'], example: `<h1>Meu Título Principal</h1>
<h2>Subtítulo Importante</h2>` },
  3: { title: 'Criando Links', tips: ['Use a tag <a> com href para o destino','target=\'_blank\' abre em nova aba','O texto entre as tags é o que aparece'], example: `<a href="https://www.google.com" target="_blank">Visite o Google</a>` },
  4: { title: 'Listas Não Ordenadas', tips: ['Use <ul> para a lista','Cada item usa <li>','Você pode ter quantos itens quiser'], example: `<ul>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Laranja</li>
</ul>` },
  5: { title: 'Inserindo Imagens', tips: ['Use a tag <img>','src=\'\' para o caminho da imagem','alt=\'\' para descrição (importante!)'], example: `<img src="https://picsum.photos/200/300" alt="Imagem de exemplo">` },
  6: { title: 'Criando Formulários', tips: ['Use <form> para envolver os campos','Cada campo pode ter placeholder','Use textarea para textos longos'], example: `<form>
  <input type="text" placeholder="Seu nome">
  <input type="email" placeholder="Seu email">
  <textarea placeholder="Sua mensagem"></textarea>
</form>` },
  7: { title: 'Estilização Inline', tips: ['Use style=\'\' dentro das tags','color: define a cor do texto','font-size: define o tamanho da fonte'], example: `<p style="color: blue; font-size: 20px;">Texto azul e grande!</p>` },
  8: { title: 'Criando Tabelas', tips: ['<table> para a tabela','<tr> para cada linha','<td> para cada célula'], example: `<table border="1">
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
</table>` },
  9: { title: 'Usando Divs e Spans', tips: ['<div> cria blocos','<span> para texto inline','Use style para cores'], example: `<div style="background-color: yellow; padding: 10px;">
  Texto normal e <span style="color: red;">texto vermelho</span>
</div>` },
  10: { title: 'Cartão de Perfil', tips: ['Combine várias tags','Use div para agrupar','Adicione estilo para layout'], example: `<div style="border: 1px solid #ccc; padding: 10px; width: 200px;">
  <img src="https://picsum.photos/100/100" alt="Foto de perfil">
  <h2>João Silva</h2>
  <p>Desenvolvedor Web</p>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</div>` },
  11: { title: 'Lista Ordenada', tips: ['Use <ol> para lista numerada','Cada item ainda usa <li>','Números aparecem automaticamente'], example: `<ol>
  <li>Matrix</li>
  <li>Inception</li>
  <li>Interstellar</li>
</ol>` },
  12: { title: 'Quebras de Linha', tips: ['<br> quebra a linha','Use dentro de parágrafos','Não precisa fechar <br>'], example: `<p>
Rosas são vermelhas<br>
Violetas são azuis<br>
HTML é incrível<br>
E você também é!
</p>` },
  13: { title: 'Linha Horizontal', tips: ['Use <hr> para linha horizontal','Separa seções de conteúdo','Não precisa fechar <hr>'], example: `<p>Primeiro parágrafo com um texto interessante.</p>
<hr>
<p>Segundo parágrafo com outro texto legal.</p>` },
  14: { title: 'Formulário de Login', tips: ["Use type='password' para senha","Adicione labels para acessibilidade","Use button type='submit'"], example: `<form>
  <input type="text" placeholder="Usuário"><br>
  <input type="password" placeholder="Senha"><br>
  <button type="submit">Entrar</button>
</form>` },
  15: { title: 'Tabela com Cabeçalho', tips: ['Use <th> para cabeçalhos','Coloque na primeira linha','Cabeçalhos ficam em negrito'], example: `<table border="1">
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
</table>` },
  16: { title: 'Texto com Ênfase', tips: ['<strong> para negrito','<em> para itálico','Combine as duas tags'], example: `<p>Este é um texto <em>muito importante</em> que precisa de <strong>bastante atenção</strong>!</p>` },
  17: { title: 'Menu de Navegação', tips: ['Use <nav> para navegação','Combine com <ul> e <li>','Cada link vai em um <li>'], example: `<nav>
  <ul>
    <li><a href="#inicio">Início</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>` },
  18: { title: 'Galeria de Imagens', tips: ['Use div para cada imagem','display: inline-block para lado a lado','Adicione margem entre as imagens'], example: `<div style="text-align: center;">
  <div style="display: inline-block; margin: 10px;">
    <img src="https://picsum.photos/200/200" alt="Imagem 1">
  </div>
  <div style="display: inline-block; margin: 10px;">
    <img src="https://picsum.photos/200/200" alt="Imagem 2">
  </div>
  <div style="display: inline-block; margin: 10px;">
    <img src="https://picsum.photos/200/200" alt="Imagem 3">
  </div>
</div>` },
  19: { title: 'Citações', tips: ['<blockquote> para citações longas','<cite> para o autor','Use dentro do blockquote'], example: `<blockquote>
  <p>A imaginação é mais importante que o conhecimento.</p>
  <cite>Albert Einstein</cite>
</blockquote>` },
  20: { title: 'Mini Site Completo', tips: ['Use <header> para cabeçalho','<nav> para navegação','<main> para conteúdo principal','<footer> para rodapé'], example: `<header style="background-color: #f0f0f0; padding: 10px;">
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
</footer>` },
};


