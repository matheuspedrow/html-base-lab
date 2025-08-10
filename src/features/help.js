import { exerciseHelp } from '../data/exerciseHelp.js';

export function atualizarPainelAjuda(numero) {
  const helpPanel = document.getElementById('current-exercise-help');
  const help = exerciseHelp[numero] || {
    title: `Exercício ${numero}`,
    tips: ['Selecione um exercício para ver dicas específicas'],
    example: '// Exemplo será mostrado aqui',
  };

  helpPanel.innerHTML = `
    <h4>📝 ${help.title}</h4>
    <div class="example-card">
      <h5>✨ Dicas:</h5>
      <ul class="help-tips">
        ${help.tips.map((tip) => `<li>${tip}</li>`).join('')}
      </ul>
      <h5>📝 Exemplo:</h5>
      <pre>${help.example}</pre>
      <div class="result">
        <h5>🎯 Resultado:</h5>
        ${help.example}
      </div>
    </div>`;
}


