/**
 * Regras de privacidade da medição de audiência (Google Analytics).
 * Mesma política dos anúncios: scripts de terceiros nunca medem páginas com
 * segredo (link do grupo, acesso, criação, painel). Funções puras, usadas no
 * navegador e nos testes.
 */

/** Prefixos de páginas privadas: o Analytics fica desligado nelas. */
const PRIVATE_PREFIXES = ["/grupo", "/acesso", "/criar", "/painel", "/api"];

export function isTrackablePath(pathname: string): boolean {
  return !PRIVATE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/**
 * Endereço enviado ao Google: só origem + caminho e os parâmetros utm_* (que
 * dizem de qual rede social a visita veio). Qualquer outro parâmetro é
 * descartado, para nunca vazar códigos ou tokens.
 */
export function sanitizedPageLocation(origin: string, pathname: string, search: string): string {
  const params = new URLSearchParams(search);
  const kept = new URLSearchParams();
  for (const [key, value] of params) {
    if (key.startsWith("utm_")) kept.append(key, value);
  }
  const query = kept.toString();
  return `${origin}${pathname}${query ? `?${query}` : ""}`;
}
