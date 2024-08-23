// lib/gtag.ts
export const GA_TRACKING_ID = 'G-Q68YQ5Q3YG'; // Replace with your tracking ID

// Log the pageview with their URL
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: number }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};