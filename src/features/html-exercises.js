import { atualizarPainelAjuda } from './help.js';
import { exerciseHelp } from '../data/exerciseHelp.js';
import { salvarResposta } from '../core/storage.js';

export function executarExercicio(numero) {
  const codigo = document.getElementById('exercicio' + numero).value;
  document.getElementById('resultado' + numero).innerHTML = codigo;
  salvarResposta(numero, codigo);
}

// Validadores básicos por exercício
const validadoresHTML = {
  1: (root) => root.querySelectorAll('p').length >= 1,
  2: (root) => root.querySelector('h1') && root.querySelector('h2'),
  3: (root) => { const a = root.querySelector('a[href]'); return a && a.getAttribute('target') === '_blank'; },
  4: (root) => { const ul = root.querySelector('ul'); return !!ul && ul.querySelectorAll('li').length >= 3; },
  5: (root) => { const img = root.querySelector('img[src]'); return !!img && img.hasAttribute('alt'); },
  6: (root) => root.querySelector('form') && root.querySelector('textarea') && root.querySelectorAll('input').length >= 2,
  7: (root) => Array.from(root.querySelectorAll('*')).some((el) => ((el.getAttribute && el.getAttribute('style')) || '').match(/color\s*:/i) && (el.getAttribute('style') || '').match(/font-size\s*:/i)),
  8: (root) => { const table = root.querySelector('table'); if (!table) return false; const rows = table.querySelectorAll('tr'); return rows.length >= 2 && rows[0].querySelectorAll('td,th').length >= 3; },
  9: (root) => root.querySelector('div') && root.querySelector('span'),
  10: (root) => root.querySelector('img') && (root.querySelector('h1, h2') || root.querySelector('p')) && root.querySelector('ul, ol'),
  11: (root) => { const ol = root.querySelector('ol'); return !!ol && ol.querySelectorAll('li').length >= 3; },
  12: (root) => root.querySelector('br'),
  13: (root) => root.querySelector('hr'),
  14: (root) => root.querySelector('input[type="password"]'),
  15: (root) => root.querySelector('table th') !== null,
  16: (root) => root.querySelector('em') && root.querySelector('strong'),
  17: (root) => (root.querySelector('nav') || root.querySelector('ul')) && root.querySelector('li a'),
  18: (root) => root.querySelectorAll('img').length >= 3,
  19: (root) => root.querySelector('blockquote') && root.querySelector('cite'),
  20: (root) => root.querySelector('header') && root.querySelector('nav') && root.querySelector('main') && root.querySelector('footer'),
};

function validarExercicioHTML(numero, htmlUsuario) {
  const container = document.createElement('div');
  container.innerHTML = htmlUsuario || '';
  const val = validadoresHTML[numero];
  if (!val) return false;
  try { return !!val(container); } catch (_) { return false; }
}

export function initHtmlExercises() {
  for (let i = 1; i <= 20; i++) {
    const textArea = document.getElementById('exercicio' + i);
    if (!textArea) continue;

    window['executarExercicio' + i] = function () { executarExercicio(i); };

    textArea.addEventListener('focus', function () { atualizarPainelAjuda(i); });
    const execBtn = textArea.parentElement.querySelector('button');
    if (execBtn) execBtn.addEventListener('click', function () { atualizarPainelAjuda(i); });

    textArea.addEventListener('input', function () { salvarResposta(i, textArea.value); });

    // Injetar botões Checar / Mostrar resposta / Usar no editor
    const codigoDiv = textArea.parentElement;
    const checkBtn = document.createElement('button');
    checkBtn.textContent = 'Checar';
    const showBtn = document.createElement('button');
    showBtn.textContent = 'Mostrar resposta';
    const useBtn = document.createElement('button');
    useBtn.textContent = 'Usar resposta no editor';
    useBtn.style.display = 'none';
    const solutionDiv = document.createElement('div');
    solutionDiv.style.display = 'none';
    solutionDiv.style.marginTop = '10px';
    const solutionPre = document.createElement('pre');
    solutionPre.className = 'codigo-exemplo';
    solutionDiv.appendChild(solutionPre);
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'dica';
    feedbackDiv.style.display = 'none';

    if (execBtn && execBtn.nextSibling) {
      codigoDiv.insertBefore(checkBtn, execBtn.nextSibling);
      codigoDiv.insertBefore(showBtn, checkBtn.nextSibling);
      codigoDiv.insertBefore(useBtn, showBtn.nextSibling);
    } else {
      codigoDiv.appendChild(checkBtn);
      codigoDiv.appendChild(showBtn);
      codigoDiv.appendChild(useBtn);
    }

    const resultadoDiv = codigoDiv.querySelector('.resultado');
    if (resultadoDiv) {
      codigoDiv.insertBefore(solutionDiv, resultadoDiv);
      codigoDiv.insertBefore(feedbackDiv, resultadoDiv);
    } else {
      codigoDiv.appendChild(solutionDiv);
      codigoDiv.appendChild(feedbackDiv);
    }

    checkBtn.addEventListener('click', function () {
      const ok = validarExercicioHTML(i, textArea.value || '');
      feedbackDiv.style.display = 'block';
      feedbackDiv.textContent = ok ? '✅ Passou nos critérios básicos!' : '❌ Ainda não está de acordo. Revise as instruções.';
      feedbackDiv.style.backgroundColor = ok ? '#e8f5e9' : '#ffebee';
    });

    showBtn.addEventListener('click', function () {
      const hidden = solutionDiv.style.display === 'none';
      if (hidden) {
        const sol = (exerciseHelp[i] && exerciseHelp[i].example) ? exerciseHelp[i].example : '';
        solutionPre.textContent = sol;
        solutionDiv.style.display = 'block';
        useBtn.style.display = 'inline-block';
        showBtn.textContent = 'Ocultar resposta';
      } else {
        solutionDiv.style.display = 'none';
        useBtn.style.display = 'none';
        showBtn.textContent = 'Mostrar resposta';
      }
    });

    useBtn.addEventListener('click', function () {
      const sol = (exerciseHelp[i] && exerciseHelp[i].example) ? exerciseHelp[i].example : '';
      textArea.value = sol;
      salvarResposta(i, sol);
      executarExercicio(i);
      feedbackDiv.style.display = 'none';
    });
  }
}


