import { carregarAbaAtiva, salvarAbaAtiva } from './storage.js';

export function inicializarAbas() {
  document.querySelectorAll('.tab-content').forEach((tab) => {
    tab.style.display = 'none';
  });

  const ultimaAba = carregarAbaAtiva();
  const abaInicial = ultimaAba && document.getElementById(ultimaAba) ? ultimaAba : 'teoria';
  const elAbaInicial = document.getElementById(abaInicial);
  if (elAbaInicial) elAbaInicial.style.display = 'block';

  const botaoInicial = document.querySelector(`.tab-button[data-aba="${abaInicial}"]`);
  if (botaoInicial) botaoInicial.classList.add('active');

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.tab-content').forEach((tab) => {
        tab.style.display = 'none';
      });
      document.querySelectorAll('.tab-button').forEach((btn) => {
        btn.classList.remove('active');
      });

      const abaId = this.getAttribute('data-aba');
      document.getElementById(abaId).style.display = 'block';
      this.classList.add('active');
      salvarAbaAtiva(abaId);
    });
  });
}


