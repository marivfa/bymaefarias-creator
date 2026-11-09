// Centralized GA4 events. No personal data should be included in parameters.
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(name)) return;
  (window as AnalyticsWindow).gtag?.('event', name, params);
}
export function initAnalyticsClicks() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const el = target.closest<HTMLElement>('[data-track-event]');
    if (!el) return;
    const name = el.dataset.trackEvent;
    if (!name) return;
    trackEvent(name, {
      item_id: el.dataset.trackId || '',
      page_location: window.location.pathname
    });
  });
}
