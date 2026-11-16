"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { type Consent, CONSENT_EVENT } from "@/lib/consent";

/** ID de métricas do Google Analytics 4 (público, aparece no HTML de qualquer site). */
export const GA_ID = "G-GPZQDQRFSY";

/**
 * Páginas com segredo (grupo, link privado, painel) nunca são medidas: a URL
 * delas tem código do grupo ou token de acesso, que não podem ir para o Google.
 */
const PRIVATE_PATHS = /^\/(grupo|acesso|painel)(\/|$)/;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

/**
 * Google Analytics com modo de consentimento (LGPD):
 * - sem escolha ou "Só essenciais": nenhum cookie de medição (só contagem anônima);
 * - "Aceitar": cookies de medição liberados.
 */
export function GoogleAnalytics() {
  const pathname = usePathname();

  // liga/desliga a medição a cada troca de página
  useEffect(() => {
    window[`ga-disable-${GA_ID}`] = PRIVATE_PATHS.test(pathname ?? "/");
  }, [pathname]);

  // escolha feita no aviso de cookies depois que a página abriu
  useEffect(() => {
    const onChange = (e: Event) => {
      const value = (e as CustomEvent<Consent>).detail;
      window.gtag?.("consent", "update", { analytics_storage: value === "all" ? "granted" : "denied" });
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const init = `
window['ga-disable-${GA_ID}'] = ${PRIVATE_PATHS}.test(location.pathname);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var aceitou = /(?:^|;\\s*)consentimento=all(?:;|$)/.test(document.cookie);
gtag('consent', 'default', {
  analytics_storage: aceitou ? 'granted' : 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
gtag('js', new Date());
gtag('config', '${GA_ID}');
`;

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {init}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
