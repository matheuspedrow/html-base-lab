// Persistência com localStorage
const STORAGE_PREFIX = 'htmlBase';

const storageKey = (subkey) => `${STORAGE_PREFIX}:${subkey}`;

export const keyAnswer = (n) => storageKey(`answer:${n}`);
export const keyResult = (n) => storageKey(`result:${n}`);
export const keyActiveTab = () => storageKey('activeTab');

export function salvarResposta(numero, valor) {
  try {
    localStorage.setItem(keyAnswer(numero), valor);
  } catch (_) {}
}

export function carregarResposta(numero) {
  try {
    return localStorage.getItem(keyAnswer(numero));
  } catch (_) {
    return null;
  }
}

export function salvarResultado(numero, html) {
  try {
    localStorage.setItem(keyResult(numero), html);
  } catch (_) {}
}

export function carregarResultado(numero) {
  try {
    return localStorage.getItem(keyResult(numero));
  } catch (_) {
    return null;
  }
}

export function salvarAbaAtiva(abaId) {
  try {
    localStorage.setItem(keyActiveTab(), abaId);
  } catch (_) {}
}

export function carregarAbaAtiva() {
  try {
    return localStorage.getItem(keyActiveTab());
  } catch (_) {
    return null;
  }
}


