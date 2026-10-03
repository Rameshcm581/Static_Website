// src/Api/apicall/registrationApi.js
/**
 * Course Registration API service.
 * Supports:
 *  1. Google Apps Script Web App (stores data in Google Sheets & triggers automated emails via Google Mail)
 *  2. FormSubmit.co (optional fallback/secondary email forwarder)
 *  3. Mock mode (local development and preview testing)
 */

const GOOGLE_SHEET_URL = import.meta.env.VITE_REGISTRATION_SHEET_URL || '';
const FORMSUBMIT_EMAIL = import.meta.env.VITE_FORMSUBMIT_EMAIL || '';
const USE_MOCK = import.meta.env.VITE_MOCK_API === 'true';

const mockResponse = (data, delay = 800) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, ...data }), delay);
  });

/**
 * Submits the completed registration form.
 *
 * @param {Object} payload The validated registration data including refCode.
 * @returns {Promise<{ ok: boolean, refCode: string }>}
 */
export async function submitRegistrationApi(payload) {
  // If explicitly configured for mock or if no external endpoints are defined, use mock response.
  if (USE_MOCK && !GOOGLE_SHEET_URL && !FORMSUBMIT_EMAIL) {
    if (import.meta.env.DEV) {
      console.warn(
        '[RegistrationApi] Running in mock mode. Registration payload simulated:',
        payload
      );
    }
    return mockResponse({ refCode: payload.refCode });
  }

  const tasks = [];

  // 1. Dispatch to Google Apps Script Web App (saves to Google Sheet + sends email)
  if (GOOGLE_SHEET_URL) {
    tasks.push(
      (async () => {
        try {
          // Sending text/plain avoids CORS preflight OPTIONS rejection on Google Apps Script
          // Google Apps Script doPost(e) reads JSON.parse(e.postData.contents) seamlessly.
          const res = await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
          });

          if (!res.ok && res.type !== 'opaque') {
            throw new Error(`Google Sheets endpoint responded with HTTP ${res.status}`);
          }
          return { provider: 'google_sheets', ok: true };
        } catch (err) {
          console.warn('[RegistrationApi] Google Sheets post notice:', err.message);
          // If fetch fails due to strict browser CORS redirect, try fallback no-cors submission
          try {
            await fetch(GOOGLE_SHEET_URL, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify(payload),
            });
            return { provider: 'google_sheets', ok: true };
          } catch (retryErr) {
            throw new Error(`Failed to save to Google Sheets: ${retryErr.message}`);
          }
        }
      })()
    );
  }

  // 2. Dispatch to FormSubmit.co if configured
  if (FORMSUBMIT_EMAIL) {
    tasks.push(
      (async () => {
        const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_EMAIL)}`;
        const formSubmitBody = {
          _subject: `New Registration: ${payload.fullName} - ${payload.course} (${payload.refCode})`,
          _template: 'table',
          _captcha: 'false',
          reference_code: payload.refCode,
          name: payload.fullName,
          email: payload.email,
          phone: payload.phone,
          date_of_birth: payload.dob,
          gender: payload.gender || 'Not specified',
          city: payload.city,
          address: payload.address || 'Not specified',
          course: payload.course,
          start_date: payload.startDate,
          delivery_mode: payload.mode,
          batch_time: payload.batch,
          qualification: payload.qualification || 'Not specified',
          notes: payload.message || 'None',
        };

        const res = await fetch(formSubmitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formSubmitBody),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || `FormSubmit responded with HTTP ${res.status}`);
        }

        return { provider: 'formsubmit', ok: true };
      })()
    );
  }

  // If no endpoint is configured at all, fallback cleanly to mock
  if (tasks.length === 0) {
    if (import.meta.env.DEV) {
      console.warn(
        '[RegistrationApi] No VITE_REGISTRATION_SHEET_URL or VITE_FORMSUBMIT_EMAIL defined. Fallback mock payload:',
        payload
      );
    }
    return mockResponse({ refCode: payload.refCode });
  }

  // Execute configured integrations
  const results = await Promise.allSettled(tasks);
  const anySuccess = results.some((r) => r.status === 'fulfilled');

  if (!anySuccess) {
    const errorDetails = results
      .filter((r) => r.status === 'rejected')
      .map((r) => r.reason?.message || 'Network error')
      .join(', ');
    throw new Error(errorDetails || 'Failed to submit registration. Please try again.');
  }

  return { ok: true, refCode: payload.refCode };
}
