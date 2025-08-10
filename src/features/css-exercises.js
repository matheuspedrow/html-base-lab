const cssExercicios = [
  { id: 1, titulo: 'Seletores básicos', descricao: 'Altere a cor dos parágrafos para azul e aumente o tamanho do h3.', html: `<h3>Título</h3><p>Parágrafo 1</p><p>Parágrafo 2</p>`, exemploCss: `p { color: blue; }\nh3 { font-size: 28px; }`, hint: 'Use seletores de elemento: p { ... } e h3 { ... }', validar: (doc)=>{ const p=doc.querySelector('p'); const h3=doc.querySelector('h3'); if(!p||!h3) return false; const cp=doc.defaultView.getComputedStyle(p).color; const fs=parseFloat(doc.defaultView.getComputedStyle(h3).fontSize); return (cp==='rgb(0, 0, 255)'||cp.includes('blue')) && fs>=26; } },
  { id: 2, titulo: 'Classes e IDs', descricao: 'Estilize .destaque com fundo claro e #unico com cor vermelha.', html: `<p class="destaque">Destaque</p><p id="unico">Único</p>`, exemploCss: `.destaque { background: #fffae6; padding: 6px; }\n#unico { color: crimson; }`, hint: 'Lembre: .classe seleciona por classe e #id seleciona um único elemento', validar: (doc)=>{ const d=doc.querySelector('.destaque'); const u=doc.getElementById('unico'); if(!d||!u) return false; const bg=doc.defaultView.getComputedStyle(d).backgroundColor; const color=doc.defaultView.getComputedStyle(u).color; return bg!=='rgba(0, 0, 0, 0)' && (color.includes('crimson') || color==='rgb(220, 20, 60)'); } },
  { id: 3, titulo: 'Box Model', descricao: 'Crie uma caixa com padding, margem e borda arredondada.', html: `<div class="caixa">Sou uma caixa</div>`, exemploCss: `.caixa { padding: 16px; margin: 12px; border: 2px solid #4CAF50; border-radius: 8px; }`, hint: 'Trabalhe em .caixa adicionando padding, margin, border e border-radius', validar: (doc)=>{ const c=doc.querySelector('.caixa'); if(!c) return false; const cs=doc.defaultView.getComputedStyle(c); return parseFloat(cs.paddingTop)>=10 && parseFloat(cs.marginTop)>=10 && parseFloat(cs.borderTopWidth)>=1; } },
  { id: 4, titulo: 'Flexbox', descricao: 'Use display:flex para alinhar itens com gap.', html: `<div class="container"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, exemploCss: `.container { display: flex; gap: 8px; }\n.item { background:#e3f2fd; padding:10px; border-radius:6px; }`, hint: 'Aplique display:flex em .container e use gap para espaçamento', validar: (doc)=>{ const c=doc.querySelector('.container'); if(!c) return false; return doc.defaultView.getComputedStyle(c).display==='flex'; } },
  { id: 5, titulo: 'Pseudo-classes', descricao: 'Adicione :hover no botão com transformação suave.', html: `<button class="botao">Passe o mouse</button>`, exemploCss: `.botao { transition: transform .2s ease; }\n.botao:hover { transform: scale(1.05); }`, hint: 'Defina .botao e adicione :hover com transform e transition', validar: (doc)=>{ const b=doc.querySelector('.botao'); if(!b) return false; const cs=doc.defaultView.getComputedStyle(b); return cs.transitionProperty.includes('transform') || cs.transitionDuration!=='0s'; } },
  { id: 6, titulo: 'Responsividade (media query)', descricao: 'No mobile (<= 480px), faça o card ocupar 100% com padding maior.', html: `<div class="card">Sou um card</div>`, exemploCss: `.card { width: 400px; padding: 12px; background:#fff; border-radius:8px; }\n@media (max-width: 480px) { .card { width: 100%; padding: 18px; } }`, hint: 'Crie uma @media (max-width: 480px) ajustando width e padding de .card', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('@media (max-width: 480px)'); } },
  { id: 7, titulo: 'Grid básico', descricao: 'Crie um layout em 3 colunas com CSS Grid e gap entre os itens.', html: `<div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div></div>`, exemploCss: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.cell { background:#f1f8e9; padding:10px; border-radius:6px; }`, hint: 'Use display:grid; grid-template-columns: repeat(3, 1fr);', validar: (doc)=>{ const g=doc.querySelector('.grid'); if(!g) return false; return doc.defaultView.getComputedStyle(g).display==='grid'; } },
  { id: 8, titulo: 'Grid com áreas', descricao: 'Defina áreas para header, main, aside e footer usando grid-template-areas.', html: `<div class="layout"><div class="header">Header</div><div class="main">Main</div><div class="aside">Aside</div><div class="footer">Footer</div></div>`, exemploCss: `.layout { display: grid; grid-template-columns: 2fr 1fr; grid-template-areas: \'"header header" \'"main aside" \'"footer footer"; gap: 10px; }\n.header{ grid-area: header; background:#e3f2fd; padding:10px }\n.main{ grid-area: main; background:#fff3e0; padding:10px }\n.aside{ grid-area: aside; background:#ede7f6; padding:10px }\n.footer{ grid-area: footer; background:#fce4ec; padding:10px }`, hint: 'Use grid-template-areas e atribua grid-area aos blocos.', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('grid-template-areas'); } },
  { id: 9, titulo: 'nth-child', descricao: 'Estilize itens ímpares e pares de uma lista com :nth-child.', html: `<ul class="lista"><li>A</li><li>B</li><li>C</li><li>D</li></ul>`, exemploCss: `.lista li:nth-child(odd){ background:#f9fbe7 }\n.lista li:nth-child(even){ background:#e8f5e9 }\n.lista li{ padding:6px; }`, hint: 'Use :nth-child(odd) e :nth-child(even).', validar: (doc)=>{ const li1=doc.querySelector('.lista li:nth-child(1)'); const li2=doc.querySelector('.lista li:nth-child(2)'); if(!li1||!li2) return false; const b1=doc.defaultView.getComputedStyle(li1).backgroundColor; const b2=doc.defaultView.getComputedStyle(li2).backgroundColor; return b1!==b2; } },
  { id: 10, titulo: 'Pseudo-elementos', descricao: 'Adicione um selo usando ::before com content em um elemento .badge.', html: `<div class="badge">Produto</div>`, exemploCss: `.badge{ position:relative; padding-left:16px }\n.badge::before{ content:"Novo"; position:absolute; left:0; top:0; font-size:10px; background:#ffeb3b; padding:2px 4px; border-radius:3px }`, hint: 'Crie .badge::before com content:"Novo".', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('::before') && styles.includes('content:'); } },
  { id: 11, titulo: 'Transitions', descricao: 'Adicione transition no background-color de uma caixa.', html: `<div class="box">Passe o mouse</div>`, exemploCss: `.box{ background:#e0f2f1; padding:14px; border-radius:6px; transition: background-color .3s ease }\n.box:hover{ background:#b2dfdb }`, hint: 'Use transition: background-color .3s ease;', validar: (doc)=>{ const el=doc.querySelector('.box'); if(!el) return false; const cs=doc.defaultView.getComputedStyle(el); return cs.transitionDuration!=='0s'; } },
  { id: 12, titulo: 'Transforms', descricao: 'Aplique transform (por exemplo, rotate) em um elemento .square.', html: `<div class="square">◼</div>`, exemploCss: `.square{ display:inline-block; padding:12px; background:#fff8e1; transform: rotate(10deg); }`, hint: 'Use transform: rotate(...deg);', validar: (doc)=>{ const el=doc.querySelector('.square'); if(!el) return false; const t=doc.defaultView.getComputedStyle(el).transform; return t && t!=='none'; } },
  { id: 13, titulo: 'Animações', descricao: 'Crie uma animação com @keyframes e aplique em .pulse.', html: `<div class="pulse">Anima</div>`, exemploCss: `.pulse{ padding:10px; background:#f3e5f5; animation: pulsar 1s infinite alternate }\n@keyframes pulsar{ from { transform: scale(1) } to { transform: scale(1.1) } }`, hint: 'Defina @keyframes e use animation: nome duração ...', validar: (doc)=>{ const el=doc.querySelector('.pulse'); if(!el) return false; const cs=doc.defaultView.getComputedStyle(el); const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return cs.animationName!=='none' && styles.includes('@keyframes'); } },
  { id: 14, titulo: 'Variáveis CSS', descricao: 'Defina uma variável --primary em :root e use como background em .chip.', html: `<div class="chip">Primary</div>`, exemploCss: `:root{ --primary: #4CAF50 }\n.chip{ background: var(--primary); color:#fff; padding:8px 12px; border-radius:16px; display:inline-block }`, hint: 'Declare :root { --primary: ... } e use var(--primary).', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes(':root') && styles.includes('--primary'); } },
  { id: 15, titulo: 'Dark mode', descricao: 'Adapte as cores quando prefers-color-scheme: dark.', html: `<div class="panel">Painel</div>`, exemploCss: `.panel{ background:#fafafa; color:#333; padding:12px; border-radius:6px }\n@media (prefers-color-scheme: dark){ .panel{ background:#263238; color:#eceff1 } }`, hint: 'Use @media (prefers-color-scheme: dark) { ... }', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('@media (prefers-color-scheme: dark)'); } },
  { id: 16, titulo: 'Tipografia responsiva', descricao: 'Use clamp para tornar o tamanho da fonte de .title responsivo.', html: `<h3 class="title">Título Responsivo</h3>`, exemploCss: `.title{ font-size: clamp(1rem, 4vw, 2rem); }`, hint: 'Utilize font-size: clamp(min, preferido, max).', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('clamp('); } },
  { id: 17, titulo: 'Flex wrap', descricao: 'Faça os cartões quebrarem linha com flex-wrap e espaçamento entre eles.', html: `<div class="wrap"><div class="card">1</div><div class="card">2</div><div class="card">3</div><div class="card">4</div><div class="card">5</div><div class="card">6</div></div>`, exemploCss: `.wrap{ display:flex; flex-wrap: wrap; gap:10px }\n.card{ width:140px; background:#fff; padding:10px; border-radius:6px; box-shadow:0 1px 2px rgba(0,0,0,.08) }`, hint: 'Use display:flex; flex-wrap: wrap; e gap.', validar: (doc)=>{ const w=doc.querySelector('.wrap'); if(!w) return false; const cs=doc.defaultView.getComputedStyle(w); const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return cs.display==='flex' && styles.includes('flex-wrap'); } },
  { id: 18, titulo: 'Position sticky', descricao: 'Deixe o cabeçalho colado no topo ao rolar usando position: sticky.', html: `<div class="head">Cabeçalho</div><div style="height:300px">Conteúdo longo...</div>`, exemploCss: `.head{ position: sticky; top:0; background:#ffecb3; padding:8px; border-bottom:1px solid #f0c36d }`, hint: 'Use position: sticky e top: 0;', validar: (doc)=>{ const h=doc.querySelector('.head'); if(!h) return false; const cs=doc.defaultView.getComputedStyle(h); const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return cs.position==='sticky' || styles.includes('position: sticky'); } },
  { id: 19, titulo: 'Aspect-ratio', descricao: 'Crie um bloco 16:9 usando aspect-ratio.', html: `<div class="video"></div>`, exemploCss: `.video{ aspect-ratio: 16 / 9; background:#c8e6c9; border-radius:8px }`, hint: 'Use aspect-ratio: 16 / 9;', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('aspect-ratio'); } },
  { id: 20, titulo: 'Scroll snap', descricao: 'Implemente scroll-snap horizontal com três itens centralizados.', html: `<div class="snap"><div class="it">A</div><div class="it">B</div><div class="it">C</div></div>`, exemploCss: `.snap{ display:flex; overflow-x:auto; gap:10px; scroll-snap-type: x mandatory; padding-bottom:10px }\n.it{ min-width: 200px; height:120px; background:#e1f5fe; border-radius:8px; scroll-snap-align: center; display:flex; align-items:center; justify-content:center }`, hint: 'Use scroll-snap-type no container e scroll-snap-align nos itens.', validar: (doc)=>{ const styles=Array.from(doc.querySelectorAll('style')).map(s=>s.textContent).join('\n'); return styles.includes('scroll-snap-type'); } },
];

function escreverPreviewCss(iframe, css, htmlBase) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const page = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;padding:16px;background:#fafafa}</style><style>${css}</style></head><body>${htmlBase}</body></html>`;
  doc.open(); doc.write(page); doc.close();
}

export function initCssExercicios() {
  const root = document.getElementById('css-exercises-root');
  if (!root) return;
  cssExercicios.forEach((ex) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'secao';
    wrapper.innerHTML = `
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
      </div>`;

    root.appendChild(wrapper);
    const ta = document.getElementById(`css-exercicio-${ex.id}`);
    const iframe = document.getElementById(`css-frame-${ex.id}`);
    const runBtn = document.getElementById(`css-run-${ex.id}`);
    const checkBtn = document.getElementById(`css-check-${ex.id}`);
    const showBtn = document.getElementById(`css-show-${ex.id}`);
    const useBtn = document.getElementById(`css-use-${ex.id}`);
    const solutionDiv = document.getElementById(`css-solution-${ex.id}`);
    const solutionPre = document.getElementById(`css-solution-pre-${ex.id}`);
    const fb = document.getElementById(`css-feedback-${ex.id}`);

    const salvo = localStorage.getItem(`htmlBase:css:answer:${ex.id}`);
    ta.value = salvo !== null ? salvo : '';
    escreverPreviewCss(iframe, ta.value, ex.html);

    ta.addEventListener('input', () => {
      localStorage.setItem(`htmlBase:css:answer:${ex.id}`, ta.value);
    });

    runBtn.addEventListener('click', () => {
      escreverPreviewCss(iframe, ta.value, ex.html);
      fb.style.display = 'none';
    });

    checkBtn.addEventListener('click', () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const ok = ex.validar(doc);
      fb.style.display = 'block';
      const dica = ex.hint ? `\nDica: ${ex.hint}` : '';
      fb.textContent = ok ? '✅ Passou nos critérios básicos!' : '❌ Ainda não está de acordo. Revise as instruções.' + dica;
      fb.style.backgroundColor = ok ? '#e8f5e9' : '#ffebee';
    });

    showBtn.addEventListener('click', () => {
      const hidden = solutionDiv.style.display === 'none';
      if (hidden) {
        solutionPre.textContent = ex.exemploCss;
        solutionDiv.style.display = 'block';
        useBtn.style.display = 'inline-block';
        showBtn.textContent = 'Ocultar resposta';
      } else {
        solutionDiv.style.display = 'none';
        useBtn.style.display = 'none';
        showBtn.textContent = 'Mostrar resposta';
      }
    });

    useBtn.addEventListener('click', () => {
      ta.value = ex.exemploCss;
      localStorage.setItem(`htmlBase:css:answer:${ex.id}`, ta.value);
      escreverPreviewCss(iframe, ta.value, ex.html);
      fb.style.display = 'none';
    });
  });
}

export function initCssExerciciosLazy() {
  const btnCss = document.querySelector('.tab-button[data-aba="exercicios-css"]');
  if (!btnCss) return;
  let loaded = false;
  btnCss.addEventListener('click', () => {
    if (loaded) return;
    initCssExercicios();
    loaded = true;
  });
}


