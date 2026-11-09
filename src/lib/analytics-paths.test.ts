import { describe, expect, it } from "vitest";
import { isTrackablePath, sanitizedPageLocation } from "./analytics-paths";

describe("isTrackablePath", () => {
  it("mede as páginas públicas", () => {
    for (const p of ["/", "/guias", "/guias/regras-do-amigo-secreto", "/ideias-de-presente", "/sobre", "/amigo-chocolate"]) {
      expect(isTrackablePath(p)).toBe(true);
    }
  });

  it("nunca mede páginas privadas", () => {
    for (const p of ["/grupo", "/grupo/ABC123", "/grupo/ABC123/eu/amigo", "/acesso/tok3n", "/criar", "/painel", "/api/x"]) {
      expect(isTrackablePath(p)).toBe(false);
    }
  });

  it("não confunde páginas públicas com prefixos parecidos", () => {
    expect(isTrackablePath("/grupos-de-amigos")).toBe(true);
    expect(isTrackablePath("/criarte")).toBe(true);
  });
});

describe("sanitizedPageLocation", () => {
  const origin = "https://amigosecretofacil.com.br";

  it("mantém só os parâmetros utm_*", () => {
    expect(sanitizedPageLocation(origin, "/", "?utm_source=tiktok&utm_medium=bio&token=segredo")).toBe(
      `${origin}/?utm_source=tiktok&utm_medium=bio`,
    );
  });

  it("descarta tudo quando não há utm", () => {
    expect(sanitizedPageLocation(origin, "/guias", "?code=XYZ&pin=1234")).toBe(`${origin}/guias`);
    expect(sanitizedPageLocation(origin, "/sobre", "")).toBe(`${origin}/sobre`);
  });
});
