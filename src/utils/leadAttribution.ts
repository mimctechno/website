/**
 * Lead Attribution & Context Utility
 * Captures UTM parameters, referrer, entry landing page, and submission metadata.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export function initLeadAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const storedUtms: Record<string, string> = {};

    // Capture and persist UTMs in sessionStorage so navigating pages doesn't lose original campaign
    UTM_KEYS.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        sessionStorage.setItem(`mimc_${key}`, val);
        storedUtms[key] = val;
      }
    });

    // Store first visited page
    if (!sessionStorage.getItem("mimc_first_page")) {
      sessionStorage.setItem("mimc_first_page", window.location.href);
    }

    // Store original external referrer
    if (document.referrer && !sessionStorage.getItem("mimc_initial_referrer")) {
      const isInternal = document.referrer.includes(window.location.hostname);
      if (!isInternal) {
        sessionStorage.setItem("mimc_initial_referrer", document.referrer);
      }
    }
  } catch {
    // Graceful fallback for restricted storage environments
  }
}

export function getLeadAttributionData(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const data: Record<string, string> = {
    submission_page_url: window.location.href,
    submission_page_title: document.title || "",
    current_referrer: document.referrer || "Direct",
    user_timezone:
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
    device_category:
      window.innerWidth < 768
        ? "Mobile"
        : window.innerWidth < 1024
          ? "Tablet"
          : "Desktop",
    screen_resolution: `${window.innerWidth}x${window.innerHeight}`,
    submitted_at: new Date().toISOString(),
  };

  try {
    const firstPage = sessionStorage.getItem("mimc_first_page");
    if (firstPage) data.first_page_visited = firstPage;

    const initialReferrer = sessionStorage.getItem("mimc_initial_referrer");
    if (initialReferrer) data.initial_referrer = initialReferrer;

    UTM_KEYS.forEach((key) => {
      const val = sessionStorage.getItem(`mimc_${key}`);
      if (val) data[key] = val;
    });
  } catch {
    // Ignore storage read errors
  }

  return data;
}

/**
 * Appends all lead attribution metadata into a FormData object
 */
export function enrichFormDataWithAttribution(formData: FormData): FormData {
  const metadata = getLeadAttributionData();
  Object.entries(metadata).forEach(([k, v]) => {
    if (v) {
      formData.set(k, v);
    }
  });
  return formData;
}
