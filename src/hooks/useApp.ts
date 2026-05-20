import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function useApp() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) window.fbq('track', 'PageView');
    if (window.gtag) window.gtag('event', 'page_view', { page_path: location.pathname });
  }, [location]);
}
