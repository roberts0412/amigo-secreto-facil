"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isTrackablePath, sanitizedPageLocation } from "@/lib/analytics-paths";
import { type Consent, CONSENT_EVENT, readConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4 para medir de onde vêm as visitas (TikTok, YouTube...).
 * - Só carrega com consentimento "all" (LGPD); "Só essenciais" = nada é medido.
 * - Nunca mede páginas privadas: nelas o envio fica desligado (ga-disable).
 * - O endereço enviado leva só o caminho e os parâmetros utm_*.
 */
export function GoogleAnalytics({ id }: { id: string }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [load, setLoad] = useState(false);
  const trackable = isTrackablePath(pathname);

  useEffect(() => {
    setConsent(readConsent(document.cookie));
    const onChange = (e: Event) => setConsent((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    // desliga o envio em páginas privadas (e se a pessoa recusar depois)
    (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = !(trackable && consent === "all");
    if (consent !== "all" || !trackable) return;

    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("js", new Date());
      setLoad(true);
    }
    window.gtag("config", id, {
      page_location: sanitizedPageLocation(location.origin, pathname, location.search),
      page_title: document.title,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }, [id, pathname, trackable, consent]);

  if (!load) return null;
  return <Script id="ga4-js" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />;
}
