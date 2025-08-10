import { carregarResposta, carregarResultado } from './storage.js';

export function atualizarProgresso() {
  const total = 20;
  let completed = 0;
  for (let i = 1; i <= total; i++) {
    const textarea = document.getElementById(`exercicio${i}`);
    if (textarea && textarea.value.trim() !== '') {
      completed++;
    }
  }
  const progressBar = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');
  const percentage = (completed / total) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completed} de ${total} exercícios completados`;
}

export function restaurarTudo() {
  for (let i = 1; i <= 20; i++) {
    const el = document.getElementById('exercicio' + i);
    if (!el) continue;
    const salvo = carregarResposta(i);
    el.value = salvo !== null ? salvo : '';
    const res = document.getElementById('resultado' + i);
    const salvoResultado = carregarResultado(i);
    if (res && salvoResultado !== null) {
      res.innerHTML = salvoResultado;
    }
  }
}


