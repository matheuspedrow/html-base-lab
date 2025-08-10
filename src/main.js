import { inicializarAbas } from './core/tabs.js';
import { restaurarTudo, atualizarProgresso } from './core/progress.js';
import { initHtmlExercises } from './features/html-exercises.js';
import { initCssExerciciosLazy } from './features/css-exercises.js';

window.addEventListener('DOMContentLoaded', () => {
  restaurarTudo();
  inicializarAbas();
  initHtmlExercises();
  initCssExerciciosLazy();
  atualizarProgresso();
});


